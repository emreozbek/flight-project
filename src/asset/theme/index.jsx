import React from "react";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { amberBrown } from "./brown";

export default function(props) {
  return (
    <MuiThemeProvider theme={amberBrown}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
}
