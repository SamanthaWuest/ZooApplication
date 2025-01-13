const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = 8088;
require("dotenv").config();
const cookieParser = require("cookie-parser");
const db = require("./database.js");
const key = process.env.ACCESS_TOKEN_SECRET;
const cors = require("cors");
const { useState } = require("react");
let events = [];
let arrayPosition = 0;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const getEmailAndPasswordFromToken = (accessToken) => {
  const decodedToken = jwt.decode(accessToken, key);
  const email = decodedToken.email;
  const password = decodedToken.password;

  return { email, password };
};

// generate the jwt token with a username
const generateToken = (email, password) => {
  const payload = { email, password };
  const options = { expiresIn: "8h" };

  return jwt.sign(payload, key, options);
};

app.post("/registration", async (req, res) => {
  let valid;
  let succesfull;
  const email = req.body.email;
  const password = req.body.password;

  console.log(email, password);

  try {
    valid = await db.validateUserCredentials(email);
  } catch (error) {
    res.sendStatus(500);
  }

  if (valid == undefined) {
    try {
      succesfull = await db.insertUser(email, password);
    } catch (error) {
      res.sendStatus(500);
    }
    if (succesfull) {
      const token = generateToken(email, password);
      console.log("Registration successful");
      console.log("Toooken ", token);
      res.cookie("token", token);
      res.sendStatus(200);
    }
  } else {
    res.sendStatus(401);
  }
});

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (token == null) {
    res.sendStatus(401);
  }

  jwt.verify(token, key, (err, user) => {
    if (err) {
      console.log(err.message);
      res.sendStatus(401);
    }
    req.user = user;
    next();
  });
};

app.post("/login", async (req, res) => {
  let valid;
  const email = req.body.email;
  const password = req.body.password;
  const token = generateToken(email, password);
  console.log(email, password);

  try {
    valid = await db.validateUserLogin(email, password);
  } catch (error) {
    res.sendStatus(500, error);
  }

  console.log(valid);

  if (valid == true) {
    res.cookie("token", token);
    res.sendStatus(200);
  } else if (valid == false) {
    res.sendStatus(401);
  } else {
    res.sendStatus(500);
  }
});

app.post("/event", authenticateToken, (req, res) => {
  let event = req.body.event;

  console.log("Stored event: ", event);

  events.push(event);

  res.send(200);
});

app.get("/confirmation", authenticateToken, async (req, res) => {
  let encodedToken = jwt.decode(authenticateToken, key);
  let email = req.user.email;
  let event = events[0];
  console.log(event);
  let confirmation = { email, event };
  res.status(200).json(confirmation);
});
