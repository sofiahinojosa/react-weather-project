import axios from "axios";
import React from "react";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
  /*function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let apiKey = "d14d0f8b82e436963f07545c57b531cb";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
*/
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img src="http://openweathermap.org/img/wn/01d.png" alt="yes"></img>
          <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">19º</span> 
          <span className="WeatherForecast-temperature-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  )
}