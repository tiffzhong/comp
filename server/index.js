const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();
const controller = require("./controller");
const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(database => {
    app.set("db", database);
  })
  .catch(error => {
    console.log(error, "error w massive");
  });

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);
app.use(express.static(`${__dirname}/../build`));
app.use(express.static("public"));

app.get("/api/users", controller.getUser);
app.get("/api/bio", controller.getBio);
app.put("/api/bio/:bio_id", controller.editBio);
app.get("/api/user/search", controller.searchUser);
app.get("/api/searched", controller.getSearched);

app.get("/api/session", controller.getSession);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Sever listening on PORT ${PORT}`);
});
