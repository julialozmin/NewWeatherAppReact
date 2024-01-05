import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function displayForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  function load() {
    let apiKey = `o214a6c6f6d2f53a6749b30tbf45c1ef`;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(url).then(displayForecast);
    return null;
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <ul className="forecastDays">
          {forecastData.map(function (dailyforecast, index) {
            if (index < 5) {
              return (
                <li key={index}>
                  <ForecastDay dailyValues={dailyforecast} />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    load();
  }
}
