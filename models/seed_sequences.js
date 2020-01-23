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

// Promise.all([db.dropCollection('sequences')]).then(() => {

Theme.findOne({ name: 'default' }).then(theme => {
    console.log(theme);
    Sequence.create({
        name: "Hero\'s Return", theme: theme, tempo: 108, tracks: [
            {pattern: [
                true,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                true,
                false,
                false,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                true,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                true,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]},
            {
                pattern:[
                false,
                true,
                true,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                true,
                true,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false
            ]},
            {
                pattern:[
                true,
                false,
                false,
                true,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]}
        ] 
    }).then(se => console.log(se))

    Sequence.create({
        name: "Old school", theme, tempo: 94, tracks: [
            {
                pattern:[
                true,
                false,
                false,
                false,
                false,
                true,
                true,
                false,
                true,
                false,
                false,
                true,
                false,
                false,
                true,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]},
            {
                pattern:[
                false,
                false,
                true,
                false,
                true,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false
            ]},
            {
                pattern:[
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false
            ]},
            {
                pattern:[
                false,
                true,
                false,
                true,
                false,
                false,
                true,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                true,
                false,
                false
            ]}
        ]
   
    })

    Sequence.create({
        name: "Default madness", theme, tempo: 200, tracks: [
            {
                pattern:[
                true,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                true,
                true,
                true,
                false,
                true,
                false,
                true
            ]},
            {
                pattern:[
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]},
            {
                pattern:[
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false
            ]},
            {
                pattern:[
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]}
        ]
    })
});

// Theme.find({name: 'vintage_mac' }).then(theme => {
//     Sequence.create({
//         name: "Only Monkey", theme, tempo: 120, tracks: [
//             [
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ],
//             [
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ],
//             [
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ],
//             [
//                 true,
//                 false,
//                 true,
//                 false,
//                 true,
//                 true,
//                 false,
//                 true,
//                 false,
//                 true,
//                 false,
//                 true,
//                 false,
//                 true,
//                 false,
//                 true
//             ],
//             [
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ],
//             [
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ],
//             [
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ],
//             [
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ]
//         ]
//     })

//     Sequence.create({
//         name: "Apple Groove", theme, tempo: 100, tracks: [
//             [
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 true,
//                 false,
//                 true,
//                 true,
//                 false,
//                 false,
//                 false
//             ],
//             [
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 true,
//                 false
//             ],
//             [
//                 true,
//                 false,
//                 true,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ],
//             [
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 true,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ],
//             [
//                 false,
//                 false,
//                 false,
//                 false,
//                 true,
//                 true,
//                 false,
//                 true,
//                 true,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ],
//             [
//                 false,
//                 false,
//                 true,
//                 false,
//                 false,
//                 false,
//                 true,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ],
//             [
//                 true,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false
//             ],
//             [
//                 true,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 false,
//                 true,
//                 false,
//                 true,
//                 true,
//                 false,
//                 true,
//                 false
//             ]
//         ]
//     })
// })

// Theme.find({ name: 'vintage_mac' }).then(theme => {

// })



// Sequence.create({
//     name: "Hero's Return", theme, tempo: 108, tracks:
//     })

// }).then(() => {
//     console.log('Success!');
//     // process.exit();
// })