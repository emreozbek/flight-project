import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { withStyles } from "@material-ui/core";
import { store } from "../../src/store";
import { Layout } from "../../src/component/Layout";
import { styles } from "../../src/component/Layout/styles";

const LayoutStyled = withStyles(styles)(Layout);
describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <LayoutStyled />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
