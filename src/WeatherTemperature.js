import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit")
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius")
  }
  if (unit === "celsius") {
  return (
    <div className="WeatherTemperature">
      <li>{props.celsius}
      <span>ºC</span>
      |
      <a href="/" onClick={convertToFahrenheit}><span>ºF</span></a>
      </li>
    </div>
  )
  } else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
    <div className="WeatherTemperature">
      <li>{Math.round(fahrenheit)}
      <a href="/" onClick={convertToCelsius}><span>ºC</span></a>
      |
      <span>ºF</span>
      </li>
    </div>
  )
  }
}