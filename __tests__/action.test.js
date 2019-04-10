import { showError, fetchFlights, addFlight } from "../src/action";
import { ADD_FLIGHT, FETCH_FLIGHTS, SHOW_ERROR } from "../src/constant";
import { formMockData } from "./__mocks__";

describe("action", () => {
  test("should handle showError", () => {
    const expected = {
      type: ADD_FLIGHT,
      data: formMockData
    };
    expect(addFlight(formMockData)).toEqual(expected);
  });
  test("should handle fetchFlights", () => {
    const expected = {
      type: FETCH_FLIGHTS
    };
    expect(fetchFlights()).toEqual(expected);
  });
  test("should handle showError", () => {
    const state = { state: true };
    const expected = {
      type: SHOW_ERROR,
      data: state
    };
    expect(showError(state)).toEqual(expected);
  });
});
