import { validate } from "../../../src/component/flight-form/validate";

test("detect required fields", () => {
  const valus = {
    departure: "Antalya",
    arrival: "İstanbul",
    departureDate: "01.01.2019 12:00",
    arrivalDate: "01.01.2019 13:30"
  };
  expect(validate(valus)).toEqual({ flightType: "required" });
});
