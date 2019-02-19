import React, { Component } from "react";
import axios from "axios";
import User from "./User";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      holder: [],
      search: "",
      whatYouSearched: ""
    };
  }
  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    axios.get("/api/users").then(res => {
      this.setState({
        users: res.data
      });
    });
  };

  searchUser(val) {
    axios.get(`/api/user/search?name=${val}`).then(res => {
      this.setState({
        holder: res.data,
        search: ""
      });
    });
  }

  showSearched() {
    axios.get("/api/searched").then(res => {
      console.log(res.data, "where you at res.data");
      this.setState({
        whatYouSearched: res.data
      });
    });
  }
  render() {
    // console.log("this.props", this.props);
    // console.log("this.state.user", this.state.user);
    const { users } = this.state;
    const allUsers = users.map(user => {
      return (
        <div className="users-container">
          <section>
            <User {...user} key={user.id} />
          </section>
        </div>
      );
    });

    const { holder } = this.state;
    const searched = holder.map(search => {
      return <p>{search.city}</p>;
    });

    return (
      <div className="Dashboard">
        <div className="title">
          <h2>beautiful dashboard</h2>
        </div>
        <h1> absolute positioning</h1>
        Search City:
        <input
          value={this.state.search}
          onChange={e => {
            this.setState({ search: e.target.value });
          }}
        />
        <button onClick={() => this.searchUser(this.state.search)}>
          Search
        </button>
        <br />
        Search Results: {searched}
        <br />
        <p>{allUsers}</p>
        <Link to="/spongebob">Click for Surprise</Link>
        <video width="320" height="240" controls>
          <source src="movie.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Dashboard;
