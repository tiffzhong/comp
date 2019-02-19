module.exports = {
  getUser: (req, res) => {
    const database = req.app.get("db");
    database.get_users().then(user => {
      res.status(200).send(user);
    });
  },

  getBio: (req, res) => {
    const database = req.app.get("db");
    database.get_bios().then(user_bio => {
      res.status(200).send(user_bio);
    });
  },

  editBio: (req, res) => {
    const database = req.app.get("db");
    const { bio_id } = req.params;
    const { bio_interest } = req.body;
    database.edit_user([bio_id, bio_interest]).then(() => {
      res.status(200).send();
    });
  },

  searchUser: (req, res) => {
    console.log(req.query, "query");
    const database = req.app.get("db");
    const { name } = req.query;
    let searchedCity = name.toLowerCase();

    database.get_users().then(usersList => {
      console.log(usersList, "list");
      let filter = usersList.filter(user => {
        console.log("name", user.city);
        if (user.city.toLowerCase().includes(searchedCity)) {
          return user.city;
        }
      });
      console.log(searchedCity, "wat is searched");
      if (filter.length > 0) {
        res.status(200).send(filter);
      } else {
        res.status(500).send("Invalid Name");
      }
    });
  },

  getSearched: (req, res) => {
    const database = req.app.get("db");
    const { name } = req.query;
    console.log(name, "leme see querey");
    database.get_users().then(usersList => {
      console.log(usersList, "list");
      let filter = usersList.filter(user => {
        console.log("name", user.city);
        return name;
      });
      console.log(searchedCity, "wat is searched");
      if (filter.length > 0) {
        res.status(200).send(filter);
      } else {
        res.status(500).send("Invalid Name");
      }
    });
    console.log(req.body);
    res.json(req.session);
  },
  getSession: (req, res) => {
    console.log("jello");
    req.session.message = "jello";
    res.json(req.session);
  }
};
