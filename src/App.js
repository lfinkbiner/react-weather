import React from "react";
import Search from "./weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
        <a href="https://github.com/lfinkbiner/react-weather">GitHub Repository</a>
      </header>
    </div>
  );
}

export default App;
