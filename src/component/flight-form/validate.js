export const validate = values => {
  let isEmpty = {};
  if (!values.departure) {
    isEmpty.departure = "required";
  }
  if (!values.arrival) {
    isEmpty.arrival = "required";
  }
  if (!values.departureDate) {
    isEmpty.departureDate = "required";
  }
  if (!values.arrivalDate) {
    isEmpty.arrivalDate = "required";
  }
  if (!values.flightType) {
    isEmpty.flightType = "required";
  }
  return isEmpty;
};
