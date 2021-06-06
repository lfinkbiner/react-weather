import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Philadelphia" />
      <footer className="App-footer">
        <a href="https://github.com/lfinkbiner/react-weather">GitHub Repository</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
