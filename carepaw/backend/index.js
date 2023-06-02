const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Database Connection
const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_lojtb",
  password: "ruQTJEOe9hNYg69P",
  database: "lab_blank01_l3ftkg",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database is connected");
  }
});
global.connection = connection;

// Create express app
const app = express();
const port = 5000;

var corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};
app.use(express.json());

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json({ type: "application/json" }));

app.get("/", require("./endpoints/test"));
app.post("/signup", require("./endpoints/endpoint_signup"));
app.post("/login", require("./endpoints/endpoint_login"));
app.get("/user/:userId", require("./endpoints/endpoint_user"));
app.put("/user/:userId", require("./endpoints/endpoint_edituser"));

app.get("/mypet", require("./endpoints/endpoint_showpet"));
app.post("/mypet", require("./endpoints/endpoint_createpet"));
app.get("/mypet/:petId", require("./endpoints/endpoint_specificpet"));
app.put("/mypet/:petId", require("./endpoints/endpoint_editpet"));
app.delete("/mypet/:petId", require("./endpoints/endpoint_deletepet"));

app.listen(port, () => {
  console.log("App is running at port " + port);
});
