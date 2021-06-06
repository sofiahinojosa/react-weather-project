import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props) {
  return (
  <div className="WeatherInfo">
  <h1>{props.data.city}</h1>

      <ul>
        <li>
      <img src={props.data.iconUrl} alt="cloudy" />
      </li>
      <li>
        <FormattedDate date={props.data.date} />
      </li>
      <li>
        <WeatherTemperature celsius={Math.round(props.data.temperature)} />
      </li>
      <li>Precipitation 15%</li>
      <li>Humidity {props.data.humidity}%</li>
      <li>Wind {Math.round(props.data.wind)}km/h</li>
      </ul>
      </div>)
}