let express = require("express");
let apiRoutes = require("./api-routes");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

var port = process.env.PORT || 3333;
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/resthub", { useNewUrlParser: true });

var db = mongoose.connection;

if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

app.use("/api", apiRoutes);

app.get("/", (req, res) => res.send("Hello World with Express"));

app.listen(port, function () {
  console.log("Running TestApi on port " + port);
});
