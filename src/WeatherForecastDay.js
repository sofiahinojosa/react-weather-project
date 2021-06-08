import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="WeatherForecast-day">{props.data.dt}</div>
          <img src="https://openweathermap.org/img/wn/01d.png" alt="yes"></img>
          
          <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">{Math.round(props.data.temp.max)}</span> 
          <span className="WeatherForecast-temperature-min">{Math.round(props.data.temp.min)}</span>
          </div>
    </div>
  )
}