import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { withStyles } from "@material-ui/core";
import { store } from "../../src/store";
import { ErrorSnackbar } from "../../src/component/snackbar";
import { styles } from "../../src/component/snackbar/styles";
import { message } from "../__mocks__/snackbar";

const ErrorSnackbarStyled = withStyles(styles)(ErrorSnackbar);

describe("Snackbar", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ErrorSnackbarStyled error={message} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
