import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function displayDay() {
    let dateHourData = new Date(props.dailyValues.time * 1000);
    let weekday = dateHourData.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[weekday];
  }

  let minimumTemperature = Math.round(props.dailyValues.temperature.minimum);
  let maximumTemperature = Math.round(props.dailyValues.temperature.maximum);
  let icon = props.dailyValues.condition.icon_url;
  let iconAlt = props.dailyValues.condition.icon;

  return (
    <div className="ForecastDay">
      <span className="day">{displayDay()}</span>{" "}
      <span className="minimum opacity-50">{minimumTemperature}</span>/
      <span className="maximum">{maximumTemperature}</span>
      º
      <img src={icon} alt={iconAlt} className="forecast-icon" />
    </div>
  );
}
