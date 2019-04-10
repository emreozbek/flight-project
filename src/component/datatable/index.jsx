import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  withStyles,
  InputBase,
  InputAdornment
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import DataTableHead from "./Head";
import { styles } from "./styles";
import { getLocalStorage, setLocalStorage } from "../../utility/storage";

export class DataTable extends Component {
  defaults = {
    order: "asc",
    orderBy: this.props.fields[0].id,
    page: 0,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 25, 50],
    search: ""
  };
  state = _.assign(
    {},
    this.defaults,
    this.props.options,
    JSON.parse(getLocalStorage(this.props.id))
  );
  setStorage() {
    setLocalStorage(this.props.id, JSON.stringify(this.state));
  }
  handleChangePage = (event, page) => {
    this.setState({ page }, this.setStorage);
  };
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value }, this.setStorage);
  };
  handleRequestSort = (event, orderBy) => {
    let order = "desc";
    if (this.state.orderBy === orderBy && this.state.order === "desc") {
      order = "asc";
    }
    this.setState({ order, orderBy }, this.setStorage);
  };
  filter(data, text) {
    return _.filter(data, row => {
      let isContain = false;
      _.forEach(row, value => {
        if (_.includes(_.toUpper(value), _.toUpper(text))) {
          isContain = true;
          return false;
        }
      });
      return isContain;
    });
  }
  render() {
    const { fields, classes } = this.props;
    const {
      order,
      orderBy,
      rowsPerPage,
      page,
      rowsPerPageOptions,
      search
    } = this.state;
    const data = this.filter(this.props.data, search);

    return (
      <Fragment>
        <div className={classes.searchBox}>
          <InputBase
            className={classes.input}
            placeholder="Search in the list"
            defaultValue={search}
            onChange={event =>
              this.setState({ search: event.target.value }, this.setStorage)
            }
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            fullWidth
          />
        </div>

        <div className={classes.tableWrapper}>
          <Table aria-labelledby="tableTitle" className={classes.table}>
            <DataTableHead
              fields={fields}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {_.map(
                _.slice(
                  _.orderBy(data, [orderBy], [order]),
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                ),
                n => {
                  return (
                    <TableRow tabIndex={-1} key={n.id}>
                      {_.flatMap(fields, (field, index) => (
                        <TableCell key={index}>{n[field.id]}</TableCell>
                      ))}
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </div>
        {data.length > 0 && (
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        )}
      </Fragment>
    );
  }
}

DataTable.propTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  options: PropTypes.object,
  classes: PropTypes.object
};

export default withStyles(styles)(DataTable);
