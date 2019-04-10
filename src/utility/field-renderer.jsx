import React from "react";
import {
  RadioGroup,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import _ from "lodash";
import { DateTimePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import momentUtil from "@date-io/moment";
import { DATE_FORMAT } from "../config";

export const renderTextField = ({
  input,
  helperText,
  meta: { touched, error },
  label,
  ...others
}) => (
  <TextField
    error={touched && Boolean(error)}
    helperText={touched && Boolean(error) ? helperText : null}
    label={label}
    {...input}
    {...others}
  />
);
export const renderDateTimePicker = ({
  input,
  meta: { touched, error },
  helperText,
  ...others
}) => (
  <MuiPickersUtilsProvider utils={momentUtil}>
    <DateTimePicker
      autoOk
      onChange={value => input.onChange(value)}
      ampm={false}
      value={input.value || null}
      format={DATE_FORMAT}
      clearable
      error={touched && Boolean(error)}
      helperText={touched && Boolean(error) ? helperText : null}
      {...others}
    />
  </MuiPickersUtilsProvider>
);
export const renderRadioGroup = ({
  input,
  label,
  options,
  name,
  helperText,
  meta: { touched, error },
  ...others
}) => {
  return (
    <FormControl
      component="fieldset"
      required
      error={touched && Boolean(error)}
    >
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        {...input}
        name={name}
        value={input.value}
        onChange={(event, value) => input.onChange(value)}
        {...others}
      >
        {_.map(options, ({ value, label }, index) => (
          <FormControlLabel
            key={index}
            value={value}
            label={label}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
