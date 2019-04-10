import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Grid, Button, withStyles } from "@material-ui/core";
import moment from "moment";
import { addFlight } from "../../action";
import {
  renderTextField,
  renderRadioGroup,
  renderDateTimePicker
} from "../../utility/field-renderer";
import { styles } from "./styles";
import { DATE_FORMAT, MESSAGE } from "../../config";
import { validate } from "./validate";

export class FlightForm extends Component {
  render() {
    const { classes, addFlight, reset, handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit(values => {
          values.departureDate = moment(values.departureDate).format(
            DATE_FORMAT
          );
          values.arrivalDate = moment(values.arrivalDate).format(DATE_FORMAT);
          addFlight(values);
          reset();
        })}
        className={classes.padding}
        noValidate="novalidate"
      >
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} className={classes.padding}>
            <Field
              required
              helperText={MESSAGE.form.required}
              name="departure"
              component={renderTextField}
              label="Departure"
              margin="dense"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.padding}>
            <Field
              required
              name="arrival"
              helperText={MESSAGE.form.required}
              component={renderTextField}
              label="Arrival"
              margin="dense"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.padding}>
            <Field
              name="departureDate"
              component={renderDateTimePicker}
              helperText={MESSAGE.form.required}
              label="Departure Date"
              margin="dense"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} className={classes.padding}>
            <Field
              name="arrivalDate"
              component={renderDateTimePicker}
              helperText={MESSAGE.form.required}
              label="Arrival Date"
              margin="dense"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={12} className={classes.padding}>
            <Field
              name="flightType"
              label="Flight Type"
              component={renderRadioGroup}
              options={[
                { value: "Cheap", label: "Cheap" },
                { value: "Business", label: "Business" }
              ]}
              row
            />
          </Grid>
        </Grid>
        <Button variant="outlined" color="primary" type="submit">
          Save
        </Button>
        <Button
          color="secondary"
          className={classes.marginLeft}
          onClick={() => {
            reset();
          }}
        >
          Reset
        </Button>
      </form>
    );
  }
}
FlightForm.propTypes = {
  classes: PropTypes.object,
  addFlight: PropTypes.func,
  handleSubmit: PropTypes.func
};
const flightForm = reduxForm({
  form: "flight",
  destroyOnUnmount: false,
  validate
})(FlightForm);
const mapDispatchToProps = {
  addFlight
};
export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(flightForm));
