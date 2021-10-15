import React from "react";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Components
import Home from "./components/Home";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
