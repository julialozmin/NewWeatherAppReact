import React from "react";
import TemperatureUnits from "./TemperatureUnits";
import "./CityDetails.css";

export default function CityDetails(props) {
  return (
    <div className="CityDetails">
      <h2>{props.data.city}</h2>
      <h6 className="text-capitalize">{props.data.weatherDescription}</h6>
      <TemperatureUnits celsius={props.data.temperature} />
    </div>
  );
}
