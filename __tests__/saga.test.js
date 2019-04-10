import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { put, call, all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import fetchFlights, { fetchCheap, fetchBusiness } from "../src/saga";
import { business, formattedBusiness } from "./__mocks__/business";
import { cheap, formattedCheap } from "./__mocks__/cheap";
import { FETCHED_FLIGHTS } from "../src/constant";
import { DOMAIN, SERVICE } from "../src/config";

describe("SAGA", () => {
  const mock = new MockAdapter(axios);
  mock.onGet(DOMAIN + SERVICE.business).reply(200, business);
  mock.onGet(DOMAIN + SERVICE.cheap).reply(200, cheap);

  it("should Get Cheap Flights and formatting", () => {
    fetchCheap().then(response => {
      expect(response).toEqual(formattedCheap);
    });
  });
  it("should Get Business Flights and formatting", () => {
    fetchBusiness().then(response => {
      expect(response).toEqual(formattedBusiness);
    });
  });
});
