import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola Mama, Feliz cumpleaños</p>
        <a
          className="App-link"
          href="https://media.giphy.com/media/3ohhwmQ0xIg8W3pHd6/200w_d.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pilo, haz click aca
        </a>
      </header>
    </div>
  );
}

export default App;
