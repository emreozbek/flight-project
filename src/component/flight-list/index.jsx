import React, { Fragment } from "react";
import { connect } from "react-redux";
import DataTable from "../datatable";
import Loading from "../loading";

export function List(props) {
  return (
    <Fragment>
      <Loading />
      <DataTable
        id="flightList"
        fields={[
          { id: "flightType", label: "Flight Type" },
          { id: "departure", label: "Departure" },
          { id: "departureDate", label: "Departure Date" },
          { id: "arrival", label: "Arrival" },
          { id: "arrivalDate", label: "Arrival Date" }
        ]}
        data={props.data}
      />
    </Fragment>
  );
}
const mapStateToProps = state => ({ data: state.reducer.data });
export default connect(mapStateToProps)(List);
