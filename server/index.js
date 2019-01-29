const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
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

app.get("/api/users", controller.getUser);
app.get("/api/bio", controller.getBio);
app.put("/api/bio/:bio_id", controller.editBio);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Sever listening on PORT ${PORT}`);
});
