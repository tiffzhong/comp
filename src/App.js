import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
        <footer>this is da footereh</footer>
      </div>
    );
  }
}

export default App;
