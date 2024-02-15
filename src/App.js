import React from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Card />
        <br />
        <small className="footer">
          Coded by{" "}
          <a
            href="http://www.linkedin.com/in/julia-lozoya"
            target="_blank"
            rel="noreferrer"
          >
            Julia Lozoya
          </a>
          , available open source on{" "}
          <a
            href="https://github.com/julialozmin/NewWeatherAppReact.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </small>
      </div>
    </div>
  );
}

export default App;
