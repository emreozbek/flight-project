import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../src/store";
import { App } from "../../src/component/App";
import { Router } from "react-router";
import { history } from "../../src/store";

describe("App", () => {
  it("renders correctly", () => {
    const mockFunction = jest.fn();
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router history={history}>
            <App fetchFlights={mockFunction} />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
