import React from "react";
import renderer from "react-test-renderer";
import { reduxForm } from "redux-form";
import { Provider } from "react-redux";
import { withStyles } from "@material-ui/core";
import { FlightForm } from "../../../src/component/flight-form";
import { styles } from "../../../src/component/flight-form/styles";
import { store } from "../../../src/store";

const Decorated = withStyles(styles)(
  reduxForm({ form: "flightForm" })(FlightForm)
);
describe("Flight Form", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Decorated />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
