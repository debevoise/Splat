const Mongoose = require("mongoose");
const con = require("../config/keys").mongoURI;
const fs = require('fs');
const { join } = require('path');

Mongoose
    .connect(con, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const db = Mongoose.connection;

const Theme = require('./Theme');
const Sample = require('./Sample');
const Sequence = require('./Sequence');

const defaultTheme = Theme.find({ name: 'default' });



