const Mongoose = require("mongoose");
const express = require("express");
const db = require("./config/keys").mongoURI;
const samples = require('./routes/api/samples');
const themes = require('./routes/api/themes');
const sequences = require('./routes/api/sequences');
const bodyParser = require('body-parser');
const path = require('path');

Mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.use(express.static('public'))
app.get("/", (req, res) => res.send("Appy McAppFace"));
app.use('/api/samples', samples)
app.use('/api/themes', themes)
app.use('/api/sequences', sequences)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running on port ${port}`));

