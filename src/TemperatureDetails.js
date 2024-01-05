import React from "react";
import "./TemperatureDetails.css";

export default function TemperatureDetails(props) {
  let roundedWind = Math.round(props.data.wind);
  return (
    <div className="TemperatureDetails">
      <div className="mainIcon">
        <img src={props.data.icon} alt={props.data.iconDescription} />
      </div>

      <h6 className="dailyValues">
        Humidity
        <span> {props.data.humidity}</span>%
        <br />
        Wind
        <span> {roundedWind} </span>
        km/h
      </h6>
    </div>
  );
}
