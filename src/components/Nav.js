import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <header>
        <div className="logged-in-header">
          <ul>
            <Link to="/">
              <li>Dashboard</li>
            </Link>

            <Link to="/users">
              <li>Users</li>
            </Link>
          </ul>
        </div>
      </header>
    );
  }
}
export default Nav;
