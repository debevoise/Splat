const Mongoose = require("mongoose");
const con = require("../config/keys").mongoURI;

Mongoose
  .connect(con, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const db = Mongoose.connection;

const Theme = require('./Theme');
const Sample = require('./Sample');
const Sequence = require('./Sequence');

Promise.all([
    db.dropCollection('themes'),
    db.dropCollection('samples')
]).then(
    // Sample.create({name: 'Kick', url: 'fake'}, function (err, sample) {
    //     if (err) return console.error(err);
    //     console.log(sample);
    //     console.log('in the callback')
    // });

    Sample.insertMany([
        {name: 'Hat', url: 'fake'},
        {name: 'Rim', url: 'fake'},
        {name: 'Clap', url: 'fake'},
        {name: 'Kick', url: 'fake'},
        {name: 'Snare', url: 'fake'},
        {name: 'Guitar', url: 'fake'},
        {name: 'Cowbell', url: 'fake'},
        {name: 'Triangle', url: 'fake'},
    ]).then((samples) => {
        Theme.insertMany([
            {name: 'Drums', samples: [samples[0], samples[1]]},
            {name: 'Meat', samples: [samples[2], samples[3], samples[7]]},
            {name: 'Electronic', samples: [samples[4], samples[5], samples[6]]},
        ]);

        const track = {
            pattern: [true, false, true, false, true, false, true, false],
            sample: samples[0],   
        }

        Sequence.create({
            tracks: [track, track, track, track, track, track, track, track],
        })
    })
)