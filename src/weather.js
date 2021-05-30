import axios from "axios";
import React, { useState } from "react";
import "./weather.css";
import FormattedDate from "./FormattedDate";

export default function Search(props) {
  const [message, setMessage] = useState(null);
  const [city, setCity] = useState(null);

  function showWeather(response) {
    let date = new Date(response.data.dt*1000);
    let description = response.data.weather[0].description;
    let temp = Math.round(response.data.main.temp);
    let city = response.data.name;
    let wind = response.data.wind.speed;
    let humidity = response.data.main.humidity;
    setMessage(<div className="message">
      <div className="row">
        <div className="col6">
          <ul>
            <li><h2>{city}</h2></li>
            <li><FormattedDate date={date}/></li>
            <li className="text-capitalize">{description}</li>
          </ul>
        </div>
        <div className="col 6">
        </div>
      </div>
      <div className="row mt-3">
      <div className="col 6">
        <img 
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="Mostly Cloudy"/>
        <span className="temp">{temp}</span>
        <span className="unit">°C|F</span>
        </div>
    <div className="col 6">
      <ul>
        <li>
          Wind: {wind}km/hr</li>
          <li>
            Humidity: {humidity}%</li></ul></div></div></div>);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80b63ee33ac52921966d0561121cb9ef&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
      <div className="col 9"><input type="search" placeholder="type a city..." className="form-control" autoFocus="on" onChange={updateCity} /></div>
      <div className="col 3"><input type="submit" value="search" className="btn btn-primary"/></div>
      </div>
    </form>
  );
  return (
    <div className="weather">
      {form}
      {message}
    </div>
  );
}
