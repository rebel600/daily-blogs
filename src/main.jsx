import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import { StoreProvider } from "easy-peasy";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>
);
