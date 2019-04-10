import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import { store } from "../../src/store";
import { Loading } from "../../src/component/loading";

describe("Loading", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Loading />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
