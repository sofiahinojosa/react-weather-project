import React, { useState } from "react"; 
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000)
    });
    setReady(true);
  }

  if (ready) {
    return(
    <div className="Weather">

      <form>
        <div className="row">
          <div className="col-9">
        <input className="form-control" type="text" placeholder="Enter a city…" aria-label="default input example" />
        </div>
        <div className="col-3">
        <button type="submit" class="btn btn-primary">Search</button>
        </div>
        </div>
      </form>

      <h1>{weatherData.city}</h1>

      <ul>
        <li>
      <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
      </li>
      <li>
        <FormattedDate date={weatherData.date} />
      </li>
      <li>{Math.round(weatherData.temperature)}ºC</li>
      <li>Precipitation 15%</li>
      <li>Humidity {weatherData.humidity}%</li>
      <li>Wind {Math.round(weatherData.wind)}km/h</li>
      </ul>

    </div>
  );
  } else {
    const apiKey = "d14d0f8b82e436963f07545c57b531cb";
    let city = "Vancouver";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
  }

} 