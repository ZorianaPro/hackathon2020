import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./rootReducer";

let devAdditions;
if (module.hot) {
  module.hot.accept();
}

if ("__REDUX_DEVTOOLS_EXTENSION__" in window) {
  devAdditions = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const store = createStore(rootReducer, devAdditions);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,lsasads
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
