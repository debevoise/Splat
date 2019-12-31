import React from "react";
import { Provider } from "react-redux";
// import { HashRouter } from "react-router-dom"; //If needed
import AppContainer from "./AppContainer";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
        <AppContainer />
    </Provider>
  );
};

export default Root;
