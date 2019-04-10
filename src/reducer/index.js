import { v4 } from "uuid";
import { initialState } from "./initialState";
import {
  ADD_FLIGHT,
  FETCH_FLIGHTS,
  FETCHED_FLIGHTS,
  SHOW_ERROR
} from "../constant";

const flights = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLIGHT:
      state.data.push({ id: v4(), ...action.data });
      return { ...state };
    case FETCH_FLIGHTS:
      return { ...state, loading: true };
    case FETCHED_FLIGHTS:
      state.data.push(...action.data);
      return { ...state, loading: false };
    case SHOW_ERROR:
      return { ...state, error: action.data };
    default:
      return state;
  }
};

export default flights;
