const Mongoose = require("mongoose");
const express = require("express");
const db = require("./config/keys").mongoURI;
const samples = require('./routes/api/samples');
const bodyParser = require('body-parser');

Mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Johnson"));
app.use('/api/samples', samples)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running on port ${port}`));

