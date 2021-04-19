import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HamburgerContextProvider,{HamburgerContext} from "./context/HamburgerContext";



ReactDOM.render(
  <React.StrictMode>
    {/* Uygulamayı context provider ile sarmalayınız */}
    <HamburgerContextProvider value={HamburgerContext}>
      <App />
    </HamburgerContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
