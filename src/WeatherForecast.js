import React, { useState, useEffect } from "react";
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

    useEffect(() => {
    setLoaded(false)   
  }, [props.coordinates]);

  /* icon code: {forecast[0].weather[0].icon} */

  if (loaded) { 
    return (
      <div className="WeatherForecast">
      <div className="row">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return ( 
        <div className="col" key={index}>
          <WeatherForecastDay data={dailyForecast} />
        </div>
            );
          } else {
            return null;
          }
        })}
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