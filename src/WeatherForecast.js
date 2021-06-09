import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay"

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  /* icon code: {forecast[0].weather[0].icon} */

  if (loaded) { 
    return (
      <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <WeatherForecastDay data={forecast[0]} />
          <WeatherForecastDay data={forecast[1]} />
          <WeatherForecastDay data={forecast[2]} />
          <WeatherForecastDay data={forecast[3]} />
          <WeatherForecastDay data={forecast[4]} />
        </div>
      </div>
    </div>
  )
} else {
  let apiKey = "d14d0f8b82e436963f07545c57b531cb";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);
  
  return null;
}
} 