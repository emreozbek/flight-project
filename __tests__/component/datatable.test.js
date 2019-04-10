import React from "react";
import renderer from "react-test-renderer";
import { withStyles } from "@material-ui/core";
import { DataTable } from "../../src/component/datatable";
import { styles } from "../../src/component/datatable/styles";
import { data, fields, id } from "../__mocks__/datatable";

const DatatabledStyled = withStyles(styles)(DataTable);
describe("Datatable", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<DatatabledStyled id={id} fields={fields} data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
