import axios from "axios";

export const fetchWeatherRequest = () => {
  return { type: "FETCH_WEATHER_REQUEST" };
};

export const fetchWeatherSuccess = (data) => {
  return { type: "FETCH_WEATHER_SUCCESS", payload: data };
};

export const fetchWeatherFailure = (error) => {
  return { type: "FETCH_WEATHER_FAILURE", payload: error };
};

const fetchWeather = (city) => {
  return (dispatch) => {
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0663525b8c41b625984c1a770adfd374";

    dispatch(fetchWeatherRequest());
    axios
      .get(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
      .then((response) => {
        dispatch(fetchWeatherSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchWeatherFailure("Such City Doesn't Exist!"));
      });
  };
};

export default fetchWeather;
