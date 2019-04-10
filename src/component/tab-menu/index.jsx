import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";
import { Tab, Tabs, withStyles } from "@material-ui/core";
import FlightList from "../flight-list";
import FlightForm from "../flight-form";
import { styles } from "./styles";
import { history } from "../../store";

export class TabMenu extends Component {
  state = { page: window.location.pathname };
  componentDidMount = () => {
    this.unListen = history.listen(location => {
      this.setState({ page: location.pathname });
    });
  };
  componentWillUnmount = () => {
    this.unListen();
  };
  render = () => {
    const { classes } = this.props;
    const { page } = this.state;
    return (
      <Fragment>
        <Tabs
          value={page}
          variant="fullWidth"
          onChange={(e, page) => this.setState({ page })}
          centered
        >
          <Tab label="Flights" component={Link} to="/" value="/" />
          <Tab label="Add FLight" component={Link} to="/add" value="/add" />
        </Tabs>
        <div className={classes.content}>
          <Route exact path="/" component={FlightList} />
          <Route path="/add" component={FlightForm} />
        </div>
      </Fragment>
    );
  };
}
TabMenu.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(TabMenu);
