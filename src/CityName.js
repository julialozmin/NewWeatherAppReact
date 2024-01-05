import React from "react";
import "./CityName.css";

export default function CityName(props) {
  return (
    <div className="CityName">
      <h2>{props.data.city}</h2>
    </div>
  );
}
