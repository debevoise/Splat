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

console.log('Dropping collections');
Promise.all([
    db.dropCollection('themes'),
    db.dropCollection('samples'),
    db.dropCollection('sequences')
]).then(() => {
    // Sample.create({name: 'Kick', url: 'fake'}, function (err, sample) {
    //     if (err) return console.error(err);
    //     console.log(sample);
    //     console.log('in the callback')
    // });

    console.log('Inserting Samples');
    Sample.insertMany([
        {name: 'Hat', url: 'fake'},
        {name: 'Rim', url: 'fake'},
        {name: 'Clap', url: 'fake'},
        {name: 'Kick', url: 'fake'},
        {name: 'Snare', url: 'fake'},
        {name: 'Guitar', url: 'fake'},
        {name: 'Cowbell', url: 'fake'},
        {name: 'Triangle', url: 'fake'},
    ]).then(samples => {
        console.log('Inserting Themes');
        Theme.insertMany([
            {name: 'Drums', samples: [samples[0], samples[1]]},
            {name: 'Meat', samples: [samples[2], samples[3], samples[7]]},
            {name: 'Electronic', samples: [samples[4], samples[5], samples[6]]},
        ]).then(themes => {
            const track = {
                pattern: [
                    false, false, false, false,
                    false, false, false, false,
                    false, false, false, false,
                    false, false, false, false
                ]
            };

            console.log('Inserting Sequence');
            Sequence.create({
                tracks: [track, track, track, track, track, track, track, track],
                theme: themes[0]
            }).then(() => {
                console.log('Success!');
                console.log('You can hard quit this... it doesn\'t exit for some reason');
            });
        });
    });
});