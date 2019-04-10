import { createMuiTheme } from "@material-ui/core";
import { amber, brown } from "@material-ui/core/colors";

export const amberBrown = createMuiTheme({
  direction: "ltr",
  palette: {
    primary: amber,
    secondary: brown
  },
  typography: {
    useNextVariants: true
  }
});
