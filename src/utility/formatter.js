import moment from "moment";
import { DATE_FORMAT } from "../config";

export const businessFLights = data => {
  return data.map(row => {
    const cities = row.flight.split(" -> ");
    return {
      flightType: "Business",
      id: row.uuid,
      departure: cities[0],
      arrival: cities[1],
      departureDate: moment(row.departure).format(DATE_FORMAT),
      arrivalDate: moment(row.arrival).format(DATE_FORMAT)
    };
  });
};
export const cheapFlights = data => {
  return data.map(row => {
    return {
      flightType: "Cheap",
      id: row.id,
      departure: row.departure,
      arrival: row.arrival,
      departureDate: moment(row.departureTime).format(DATE_FORMAT),
      arrivalDate: moment(row.arrivalTime).format(DATE_FORMAT)
    };
  });
};
