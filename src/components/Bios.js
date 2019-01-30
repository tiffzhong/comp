import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Bios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio_interest: ""
    };
  }

  componentDidMount() {
    this.setState({
      bio_interest: this.props.bio_interest
    });
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  editBio = (bio_id, bio_interest) => {
    axios
      .put(`/api/bio/${this.props.bio_id}`, {
        bio_interest: this.state.bio_interest
      })
      .then(() => {
        window.location.pathname = "/users";
      });
  };

  render() {
    let { city, bio_id } = this.props;
    return (
      <div>
        {city}
        <input
          onChange={event => this.handleChange(event)}
          name="bio_interest"
          value={this.state.bio_interest}
        />
        <button
          onClick={() => {
            this.editBio();
          }}
        >
          Edit
        </button>
        <Link to={`/match/${bio_id}`}>
          <li>Match</li>
        </Link>
      </div>
    );
  }
}
export default Bios;
