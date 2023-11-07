import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./contexts";
import Menu from "./pages/Menu";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Menu />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
