import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Monday 10:00</li>
          <li>Party Cloudy</li>
        </ul>
        <div className="row mt-2">
          <div className="col-6 ">
            <div className="d-flex ">
              <div className="float-left">
                <img
                  src="https://assets.msn.com/weathermapdata/1/static/svg/72/v6/card/MostlyClearNight.svg"
                  alt="Mostly Clear"
                />
              </div>
              <div className="float-left">
                <span className="temperature ">17</span>{" "}
                <span className="unit ">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:11%</li>
              <li>Humidity:76%</li>
              <li>Wind:14 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7f1b7e4b0fb06dadbcb394f55e8ea3d5";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
