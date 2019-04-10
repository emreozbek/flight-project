import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

export function Layout(props) {
  const { background, wrapper } = props.classes;
  return (
    <Fragment>
      <div className={background} />
      <div className={wrapper}>
        <Typography variant="h5" component="h1" gutterBottom>
          Flight Project
        </Typography>
        <Paper elevation={1}>{props.children}</Paper>
        <Typography variant="caption">
          Powered using React, Redux, Redux-Saga and Axios
        </Typography>
      </div>
    </Fragment>
  );
}
Layout.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Layout);
