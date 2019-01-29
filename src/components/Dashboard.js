import React, { Component } from "react";
import axios from "axios";
import User from "./User";
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    axios.get("/api/users").then(res => {
      console.log(res, "res?");
      this.setState({
        users: res.data
      });
    });
  };

  render() {
    const { users } = this.state;
    const allUsers = users.map(user => {
      return (
        <div>
          <User {...user} key={user.id} />
        </div>
      );
    });
    return (
      <div className="Dashboard">
        Hey <p>{allUsers}</p>
      </div>
    );
  }
}

export default Dashboard;
