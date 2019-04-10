import React from "react";
import PropTypes from "prop-types";
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel
} from "@material-ui/core";
import _ from "lodash";

class Head extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };
  render = () => {
    const { order, orderBy, fields } = this.props;
    return (
      <TableHead>
        <TableRow>
          {_.flatMap(
            fields,
            field => (
              <TableCell
                key={field.id}
                sortDirection={orderBy === field.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === field.id}
                  direction={order}
                  onClick={this.createSortHandler(field.id)}
                >
                  {field.label}
                </TableSortLabel>
              </TableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  };
}
Head.propTypes = {
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  onRequestSort: PropTypes.func
};
export default Head;
