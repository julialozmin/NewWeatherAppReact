import React from "react";
import "./styles/CityDetails.css";

export default function CityDetails(props) {
  let roundedCelsius = Math.round(props.data.temperature);
  return (
    <div className="CityDetails">
      <h6 className="text-capitalize">{props.data.weatherDescription}</h6>
      <h1>{roundedCelsius}º</h1>
      <div className="degrees opacity-75">Celsius</div>
    </div>
  );
}
