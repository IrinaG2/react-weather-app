import React from "react";
import Weather from "./Weather";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          Coded by{" "}
          <a href="https://github.com/IrinaG2/react-weather-app">
            {" "}
            Irina Gurianova
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
