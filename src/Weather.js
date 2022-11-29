import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Monday 10:00</li>
        <li>Party Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://assets.msn.com/weathermapdata/1/static/svg/72/v6/card/MostlyClearNight.svg"
            alt="Mostly Clear"
          />
          17°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:11%</li>
            <li>Humidity:76%</li>
            <li>Wind:14 km/h</li>
          </ul>
        </div>
      </div>
      <footer>Coded by Irina Gurianova </footer>
    </div>
  );
}
