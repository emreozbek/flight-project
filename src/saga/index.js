import { put, takeLatest, all, call } from "redux-saga/effects";
import axios from "axios";
import { FETCH_FLIGHTS, FETCHED_FLIGHTS, SHOW_ERROR } from "../constant";
import { businessFLights, cheapFlights } from "../utility/formatter";
import { DOMAIN, SERVICE, MESSAGE } from "../config";

export const fetchCheap = () =>
  axios
    .get(DOMAIN + SERVICE.cheap)
    .then(response => cheapFlights(response.data));
export const fetchBusiness = () =>
  axios
    .get(DOMAIN + SERVICE.business)
    .then(response => businessFLights(response.data));

export function* fetchFlights() {
  try {
    const [cheap, business] = yield all([
      call(fetchCheap),
      call(fetchBusiness)
    ]);
    yield put({ type: FETCHED_FLIGHTS, data: [...cheap, ...business] });
  } catch (error) {
    yield put({
      type: SHOW_ERROR,
      data: {
        state: true,
        message: MESSAGE.error.server
      }
    });
    put({ type: FETCHED_FLIGHTS, data: [] });
  }
}

function* Saga() {
  yield takeLatest(FETCH_FLIGHTS, fetchFlights);
}
export default Saga;
