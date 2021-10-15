import React, { useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import fetchWeather from "../redux/weather/weatherAction";

const Home = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.weatherState);
//   console.log(
//     loading ? "Loading..." : error || !data ? error : data.weather[0].main
//   );

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
        {loading && "Loading..."}
        {!error && data && data.weather[0].main}
        {error && error}
      </div>
    </div>
  );
};

export default Home;
