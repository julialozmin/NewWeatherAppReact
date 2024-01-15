import React, { useState } from "react";
import axios from "axios";
import "./Card.css";
import CityName from "./CityName";
import CityDetails from "./CityDetails";
import TemperatureDetails from "./TemperatureDetails";
import Forecast from "./Forecast";
import DateHour from "./DateHour";

export default function Card(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(null);
  function handleResponse(response) {
    setWeatherData({
      timestamp: response.data.time,
      city: response.data.city,
      weatherDescription: response.data.condition.description,
      temperature: response.data.temperature.current,
      icon: response.data.condition.icon_url,
      iconDescription: response.data.condition.icon,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }

  function search() {
    const key = `o214a6c6f6d2f53a6749b30tbf45c1ef`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&unit=metric`;
    axios.get(url).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Card">
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a city"
                  aria-describedby="button-addon2"
                  onChange={handleCityChange}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handleSubmit}
                >
                  Search city
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <CityName data={weatherData} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              <div className="col-6">
                <TemperatureDetails data={weatherData} />
              </div>

              <div className="col-6">
                <CityDetails data={weatherData} />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <DateHour timestamp={weatherData.timestamp} />
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <Forecast city={weatherData.city} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Card">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="..."
                  aria-describedby="button-addon2"
                  onChange={handleCityChange}
                />
                <button className="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>Enter a city to display its weather</h2>
          </div>
        </div>
      </div>
    );
  }
}
