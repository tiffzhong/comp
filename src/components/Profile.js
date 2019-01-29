import React, { Component } from "react";
import axios from "axios";
import Bios from "./Bios";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      bio: []
    };
  }
  componentDidMount() {
    this.getBio();
  }

  getBio = () => {
    axios.get("/api/bio").then(res => {
      this.setState({
        bio: res.data
      });
    });
  };

  editBio = () => {
    const { bio_id, bio_interest } = this.props;
    axios.put(`/api/bio/${bio_id}`, { bio_interest }).then(() => {
      window.location.pathname = "/users";
    });
  };

  render() {
    const { bio } = this.state;

    const allBios = bio.map(interest => {
      console.log(interest);
      return (
        <div>
          <Bios {...interest} />
        </div>
      );
    });
    return (
      <div className="Profile">
        Search City:
        <input /> <button>Search</button>
        {allBios}
      </div>
    );
  }
}

export default Profile;
