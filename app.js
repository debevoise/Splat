
// import { express } from 'express';
// import { mongoURI } from './config/keys.js';
// import { Mongoose } from 'mongoose';


const Mongoose = require("mongoose");
const express = require("express");
const db = require("./config/keys").mongoURI;

Mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Demon"));
app.listen(port, () => console.log(`Server is running on port ${port}`));

