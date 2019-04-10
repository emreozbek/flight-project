import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Theme from "../../asset/theme";
import Layout from "../Layout";
import TabMenu from "../tab-menu";
import NotFound from "../not-found";
import { fetchFlights } from "../../action";
import Snackbar from "../snackbar";

export class App extends Component {
  componentDidMount() {
    this.props.fetchFlights();
  }
  render = () => (
    <Theme>
      <Layout>
        <Snackbar />
        <Switch>
          <Route path="/" exact component={TabMenu} />
          <Route path="/add" component={TabMenu} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Theme>
  );
}
App.propTypes = {
  fetchFlights: PropTypes.func
};

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = {
  fetchFlights
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
