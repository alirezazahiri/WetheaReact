import React, { useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import fetchWeather from "../redux/weather/weatherAction";

// loader
import Loader from "react-loader-spinner";
import Information from "./Information";

const Home = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.weatherState);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(value));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      </form>
      <div>
        {loading && (
          <Loader type="Rings" color="#340E57" height={80} width={80} />
        )}
        {!error && data && <Information city={data} />}
        {error && error}
      </div>
    </div>
  );
};

export default Home;
