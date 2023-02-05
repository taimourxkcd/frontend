import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AppState } from "./AppState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppState>
    <Router>
      <App />
    </Router> 
  </AppState>
);

reportWebVitals();
