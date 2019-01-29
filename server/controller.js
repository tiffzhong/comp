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

  searchCity: (req, res) => {
    const database = req.app.get("db");
    console.log(req.query);
    const { search } = req.query;
  }
};
