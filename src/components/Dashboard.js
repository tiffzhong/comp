import React, { Component } from "react";
import axios from "axios";
import User from "./User";
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
      if (res.data === "invalid") {
        alert(res.data);
      } else {
        this.setState({
          holder: res.data,
          search: ""
        });
      }
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
        <div>
          <User {...user} key={user.id} />
        </div>
      );
    });

    const { holder } = this.state;
    const searched = holder.map(search => {
      return <p>{search.city}</p>;
    });
    // const { whatYouSearched } = this.state;
    // const displaySearchedValue = whatYouSearched.map(displaySearched => {
    //   return <p>{displaySearched}</p>;
    // });
    return (
      <div className="Dashboard">
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
        Placeholder: {searched}
        <br />
        <p>{allUsers}</p>
        <button onClick={() => this.showSearched(this.state.whatYouSearched)}>
          Click Dis
        </button>
        {/* {displaySearchedValue} */}
      </div>
    );
  }
}

export default Dashboard;
