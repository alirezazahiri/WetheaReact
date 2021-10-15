const initialState = {
  data: undefined,
  error: "",
  loading: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_REQUEST":
      return { ...state, loading: true, data: {}, error: "" };
    case "FETCH_WEATHER_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: "" };
    case "FETCH_WEATHER_FAILURE":
      return { ...state, loading: false, data: {}, error: action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
