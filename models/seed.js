const Mongoose = require("mongoose");
const con = require("../config/keys").mongoURI;
const fs = require('fs');
const { join } = require('path');


function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/ /g, '%20');
}


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

    const rootDir = join(__dirname, '..');
    const publicDir = '/public/samples';
    const samplesDir = join(rootDir, publicDir);
    const allowedTypes = ['wav', 'mp3', 'aif', 'aiff'];
 
    let themes = [];
    fs.readdirSync(samplesDir).forEach(file => {
        if (fs.lstatSync(join(samplesDir, file)).isDirectory()) themes.push(file);
    });
    console.log('Themes found:');
    console.log(themes);

    themes.forEach(theme => {
        let files = fs.readdirSync(join(samplesDir, theme));

        let samples = [];
        files.forEach(file => {
            let extension = file.split('.').slice(-1)[0];
            if (allowedTypes.includes(extension)) {
                samples.push({ name: file.split('.')[0], url: htmlEntities(join('samples', theme, file)) });
            }
        });

        console.log('Inserting Samples');
        console.log(samples);
        Sample.insertMany(samples)
            .then(createdSamples => {
                console.log('Inserting Themes');
                Theme.create({ name: theme, samples: createdSamples })
                    .then(theme => {
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
                            theme: theme
                        }).then(() => {
                            console.log('Success!');
                            process.exit();
                        });
                    });
            });
    });
});