import { v4 } from "uuid";
import reducer from "../src/reducer";
import { initialState } from "../src/reducer/initialState";
import { fetchedMockData, formMockData } from "./__mocks__";

describe("reducer", () => {
  test("should return initialState", () => {
    const action = { type: "INITIAL_STATE" };
    const state = reducer(undefined, action);
    expect(state).toEqual(initialState);
  });
  test("should handle ADD_FLIGHT", () => {
    const mockId = 1;
    const uuIdv4 = jest.spyOn(v4, "v4").mockReturnValue(mockId);
    const action = { type: "ADD_FLIGHT", data: formMockData };
    const state = reducer(initialState, action);
    expect(state.data.length).toEqual(1);
    expect(uuIdv4).toHaveBeenCalled();
    expect(state.data[0].id).toBeDefined();
  });
  test("should handle FETCH_FLIGHTS", () => {
    const action = { type: "FETCH_FLIGHTS" };
    const state = reducer(initialState, action);
    expect(state.loading).toBeTruthy();
  });
  test("should handle FETCHED_FLIGHTS", () => {
    const action = { type: "FETCHED_FLIGHTS", data: fetchedMockData };
    const state = reducer({ ...initialState, data: [] }, action);
    expect(state.data.length).toEqual(2);
  });
  test("should handle SHOW_ERROR", () => {
    const data = { state: true, message: "error message" };
    const action = { type: "SHOW_ERROR", data };
    const state = reducer(initialState, action);
    expect(state.error).toBeTruthy();
  });
});
