const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

//display content
app.use(express.statec("public"));

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

const expHbs = require("express-handlebars");

app.engine("handlebars", expHbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");