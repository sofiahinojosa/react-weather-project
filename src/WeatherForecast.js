import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">{forecast[0].dt}</div>
          <img src="https://openweathermap.org/img/wn/01d.png" alt="yes"></img>
          <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">{Math.round(forecast[0].temp.max)}</span> 
          <span className="WeatherForecast-temperature-min">{Math.round(forecast[0].temp.min)}</span>
          </div>
        </div>
      </div>
    </div>
  )
} else {
  let apiKey = "d14d0f8b82e436963f07545c57b531cb";
  let longitude = props.lon;
  let latitude = props.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);
  
  return null;
}
}