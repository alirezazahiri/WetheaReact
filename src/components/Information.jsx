import React from "react";
import { convert } from "../services/fahrenheitToCentigrade";

const Information = ({ city }) => {
  const { name, weather, main, sys } = city;

  // destructure the needed data from each part
  const { country } = sys;
  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = main;
  const { main: status, description, icon } = weather[0];

  // get weather status icon
  const ICON_SRC = `https://openweathermap.org/img/wn/${icon}.png`;

  return (
    <div>
      <h1>
        {name}({country})
      </h1>
      <div>
        <div>
          <h3>{status}</h3>
          <p>{description}</p>
        </div>
        <img src={ICON_SRC} alt="weather status" />
      </div>
      <div>
        <div>
          <h3>Temperature</h3>
          <h3>{convert(temp)}</h3>
        </div>
        <div>
          <h3>Feels Like</h3>
          <h3>{convert(feels_like)}</h3>
        </div>
        <div>
          <h3>Lowest Temperature</h3>
          <h3>{convert(temp_min)}</h3>
        </div>
        <div>
          <h3>Highest Temperature</h3>
          <h3>{convert(temp_max)}</h3>
        </div>
        <div>
          <h3>Pressure</h3>
          <h3>{pressure}</h3>
        </div>
        <div>
          <h3>Humidity</h3>
          <h3>{humidity}</h3>
        </div>
      </div>
    </div>
  );
};

export default Information;
