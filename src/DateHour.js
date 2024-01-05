import React from "react";
import "./DateHour.css";

export default function DateHour(props) {
  let dateHourData = new Date(props.timestamp * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentWeekday = days[dateHourData.getDay()];
  let currentMonth = months[dateHourData.getMonth()];
  let currentDate = dateHourData.getDate();
  let currentYear = dateHourData.getFullYear();
  let hours = dateHourData.getHours();
  let minutes = dateHourData.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="DateHour d-flex justify-content-center opacity-75">
      <div className="date">
        <h6 className="dateHour">
          {currentWeekday}, {currentDate} {currentMonth} {currentYear}
        </h6>
      </div>
      <div className="hour ms-5">
        <h6 className="dateHour">
          {hours}:{minutes}
        </h6>
      </div>
    </div>
  );
}
