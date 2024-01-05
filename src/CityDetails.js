import React from "react";
import "./CityDetails.css";

export default function CityDetails(props) {
  let roundedCelsius = Math.round(props.data.temperature);
  return (
    <div className="CityDetails">
      <h2>{props.data.city}</h2>
      <h6 className="text-capitalize">{props.data.weatherDescription}</h6>
      <h1>
        {roundedCelsius}
        <span className="opacity-75">º C</span>
      </h1>
    </div>
  );
}
