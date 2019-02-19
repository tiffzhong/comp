import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/">Dashboard</Link>

          <Link to="/users">Hobbies</Link>
        </nav>
      </header>
    );
  }
}
export default Nav;
