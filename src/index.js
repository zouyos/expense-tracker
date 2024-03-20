import "./global.css";
import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store/index";
import { PersistGate } from "redux-persist/integration/react";
import { persitstor } from "store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persitstor}>
      <App />
    </PersistGate>
  </Provider>
);
