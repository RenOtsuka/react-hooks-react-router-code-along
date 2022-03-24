import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

// Step 3. Use <BrowserRouter> component to wrap the entire application and provide React Router context features
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

