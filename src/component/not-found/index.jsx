import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";
import { styles } from "./styles";

function NotFound(props) {
  const { classes } = props;
  return (
    <Fragment>
      <Typography variant="h4" className={classes.padding} align="center">
        404 Not Found
      </Typography>
      <Typography
        variant="subtitle1"
        className={classes.padding}
        align="center"
      >
        You should turn back to <Link to="/">Home</Link>
      </Typography>
    </Fragment>
  );
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(NotFound);
