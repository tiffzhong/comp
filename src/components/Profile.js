import React, { Component } from "react";
import axios from "axios";
import Bios from "./Bios";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: [],
      city: [],
      search: ""
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

  searchUser(val) {
    axios.get(`/api/user/search?name=${val}`).then(res => {
      console.log(res.data, "res.data from search");
      if (res.data === "invalid search") {
        alert(res.data);
      } else {
        this.setState({
          city: res.data,
          search: ""
        });
      }
    });
  }

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
        Search Name:
        <input
          value={this.state.search}
          onChange={e => {
            this.setState({ search: e.target.value });
          }}
        />
        <button onClick={() => this.searchUser(this.state.search)}>
          Search
        </button>
        {this.state.city}
        {allBios}
      </div>
    );
  }
}

export default Profile;
