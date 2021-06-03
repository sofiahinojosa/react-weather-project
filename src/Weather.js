import React from "react"; 
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather() {
  return(
    <div className="Weather">

      <form>
        <div className="row">
          <div className="col-9">
        <input class="form-control" type="text" placeholder="Enter a city…" aria-label="default input example" />
        </div>
        <div className="col-3">
        <button type="submit" class="btn btn-primary">Search</button>
        </div>
        </div>
      </form>

      <h1>New York</h1>

      <ul>
        <li>
      <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy" />
      </li>
      <li>22ºC</li>
      <li>Precipitation 15%</li>
      <li>Humidity 84%</li>
      <li>Wind 0km/h</li>
      </ul>

    </div>
  )
}