const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

//display content
app.use(express.static("public"));

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

const expHbs = require("express-handlebars");

app.engine("handlebars", expHbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controllers");

app.use(routes);

app.listen(PORT, function () {
  console.log("main server.js listening on: http://localhost:" + PORT);
});