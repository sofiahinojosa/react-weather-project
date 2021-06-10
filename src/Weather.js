import React, { useState } from "react"; 
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"
import "./Weather.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity)
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response)
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      coordinates: response.data.coord
    });
    setReady(true);
  }

  
  function search() {
  const apiKey = "d14d0f8b82e436963f07545c57b531cb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city)
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return(
    <div className="Weather">

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
        <input className="form-control" type="text" placeholder="Enter a city…" aria-label="default input example" onChange={handleCityChange} />
        </div>
        <div className="col-3">
        <button type="submit" className="btn btn-primary">Search</button>
        </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} />
    </div>
  );
  } else {
    const apiKey = "d14d0f8b82e436963f07545c57b531cb";
    let city = "New York"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
  }

} 