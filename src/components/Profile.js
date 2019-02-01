import React, { Component } from "react";
import axios from "axios";
import Bios from "./Bios";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: [],
      city: []
    };
  }
  componentDidMount() {
    this.getBio();
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
  getBio = () => {
    axios.get("/api/bio").then(res => {
      this.setState({
        bio: res.data
      });
    });
  };

  render() {
    const { bio } = this.state;

    const allBios = bio.map(interest => {
      return (
        <div>
          <Bios {...interest} />
        </div>
      );
    });
    return (
      <div className="Profile">
        {this.state.city}
        {allBios}
      </div>
    );
  }
}

export default Profile;
