import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Search from "./weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
        <a href="https://github.com/lfinkbiner/react-weather">GitHub Repository</a>
      </header>
      </div>
    </div>
  );
}

export default App;
