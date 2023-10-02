const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = ["task1", "task2", "task 3"];

app.listen(3000);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();
  var day = today.toLocaleDateString("en-UK");
  res.render("list", { day: day, items: items });
});

app.post("/", (req, res) => {
  items.push(req.body.newItem);
  res.redirect("/");
});
