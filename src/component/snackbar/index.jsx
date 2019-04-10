import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Snackbar,
  SnackbarContent,
  IconButton,
  Button,
  withStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { fetchFlights, showError } from "../../action/index";
import { styles } from "./styles";

export class ErrorSnackbar extends Component {
  render() {
    const { error, fetchFlights, showError, classes } = this.props;
    return (
      <Snackbar
        open={error.state}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
      >
        <SnackbarContent
          className={classes.error}
          aria-describedby="client-snackbar"
          message={<span id="message-id">{error.message}</span>}
          action={[
            <Button
              key="retry"
              color="primary"
              size="small"
              onClick={() => {
                fetchFlights();
                showError({ state: false, message: "" });
              }}
            >
              RETRY
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={() =>
                showError({
                  state: false,
                  message: ""
                })
              }
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </Snackbar>
    );
  }
}

ErrorSnackbar.propTypes = {
  error: PropTypes.object,
  classes: PropTypes.object
};

const mapStateToProps = state => ({
  error: state.reducer.error
});
const mapDispatchToProps = {
  fetchFlights,
  showError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ErrorSnackbar));
