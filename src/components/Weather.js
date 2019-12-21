import React from "react";
import "./Weather.css";
import "font-awesome/css/font-awesome.min.css";
import clearday from "../images/clearday.jpg";
import clearnight from "../images/clearnight.JPG";
import thunder from "../images/thunder.JPG";
import drizzleday from "../images/drizzleday.JPG";
import drizzlenight from "../images/drizzlenight.JPG";
import rainday from "../images/rainday.JPG";
import rainnight from "../images/rainnight.JPG";
import snowday from "../images/snowday.JPG";
import snownight from "../images/snownight.JPG";
import cloudday from "../images/cloudday.JPG";
import cloudnight from "../images/cloudnight.JPG";

const time = new Date().getHours();
const today = new Date();
const options = {
  weekday: "long",
  month: "long",
  day: "numeric"
};
let icon = "fas fa-sun";
let background = { backgroundImage: `url(${clearday})` };

const Weather = props => {
  if (props.condition === "Thunderstorm") {
    icon = "fas fa-bolt";
    background = { backgroundImage: `url(${thunder})` };
  } else if (props.condition === "Drizzle") {
    if (time >= 7 && time <= 19) {
      icon = "fas fa-cloud-sun";
      background = { backgroundImage: `url(${drizzleday})` };
    } else {
      icon = "fas fa-cloud-moon-rain";
      background = { backgroundImage: `url(${drizzlenight})` };
    }
  } else if (props.condition === "Rain") {
    if (time >= 7 && time <= 19) {
      icon = "fas fa-cloud-showers-heavy";
      background = { backgroundImage: `url(${rainday})` };
    } else {
      icon = "fas fa-cloud-moon-rain";
      background = { backgroundImage: `url(${rainnight})` };
    }
  } else if (props.condition === "Snow") {
    if (time >= 7 && time <= 19) {
      icon = "fas fa-snowflake";
      background = { backgroundImage: `url(${snowday})` };
    } else {
      icon = "fas fa-snowflake";
      background = { backgroundImage: `url(${snownight})` };
    }
  } else if (props.condition === "Clear") {
    if (time >= 7 && time <= 19) {
      icon = "fas fa-sun";
      background = { backgroundImage: `url(${clearday})` };
    } else {
      icon = "fas fa-moon";
      background = { backgroundImage: `url(${clearnight})` };
    }
  } else if (props.condition === "Clouds") {
    if (time >= 7 && time <= 19) {
      icon = "fas fa-cloud";
      background = { backgroundImage: `url(${cloudday})` };
    } else {
      icon = "fas fa-cloud-moon";
      background = { backgroundImage: `url(${cloudnight})` };
    }
  }
  return (
    <div className="container" style={background}>
      <div className="main">
        <div className="date">
          <p>{today.toLocaleDateString("en-US", options)}</p>
        </div>
        <div className="weather">
          <div className="city">
            <h2>{props.city}</h2>
          </div>
          <div className="high-low">
            <p>
              High: {Math.round(props.high)} | Low: {Math.round(props.low)}
            </p>
          </div>
          <div className="temperature">
            <h1>{Math.round(props.temperature)}°C</h1>
          </div>
          <div className="feels">
            <p>Feels like: {Math.round(props.feels)}°</p>
          </div>
          <div className="icon">
            <i className={icon}></i>
          </div>
          <div className="description">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
