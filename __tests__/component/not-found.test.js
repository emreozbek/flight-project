import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import NotFound from "../../src/component/not-found";
import { styles } from "../../src/component/not-found/styles";

const NotFoundStyled = withStyles(styles)(NotFound);
describe("Not Found", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <NotFoundStyled />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
