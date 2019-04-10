import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import { Provider } from "react-redux";
import { TabMenu } from "../../src/component/tab-menu";
import { styles } from "../../src/component/tab-menu/styles";
import { store } from "../../src/store";

const TabMenuStyled = withStyles(styles)(TabMenu);

describe("TabMenu", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <TabMenuStyled />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
