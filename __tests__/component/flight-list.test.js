import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../src/store";
import { List } from "../../src/component/flight-list";
import { data } from "../__mocks__/datatable";

describe("List", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <List data={data} />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
