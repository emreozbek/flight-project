import { ADD_FLIGHT, FETCH_FLIGHTS, SHOW_ERROR } from "../constant";

export const addFlight = data => ({
  type: ADD_FLIGHT,
  data
});
export const fetchFlights = () => ({
  type: FETCH_FLIGHTS
});
export const showError = data => ({
  type: SHOW_ERROR,
  data
});


