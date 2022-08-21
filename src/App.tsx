import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import Users from "./screens/Users";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#141414" />
      {/* <Home /> */}
      <Users />
    </Provider>
  );
};

export default App;
