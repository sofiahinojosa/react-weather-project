import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
          <img src="https://openweathermap.org/img/wn/01d.png" alt="yes"></img>
          
          <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">{maxTemperature()}</span> 
          <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
          </div>
    </div>
  )
}