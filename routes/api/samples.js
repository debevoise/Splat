const express = require("express");
const router = express.Router();
const Sample = require('../../models/Sample');

router.get("/test", (req, res) => res.json({ msg: "This is the samples route" }));

router.get('/', (req, res) => {
    Sample.find()
        .then(samples => res.json(samples))
        .catch(err => res.status(404).json({ nosamplesfound: 'No samples found' }));
});

router.get('/:id', (req, res) => {
    Sample.findById(req.params.id)
        .then(sample => res.json(sample))
        .catch(err =>
            res.status(404).json({ nosamplefound: 'No sample found with that ID' })
        );
});

module.exports = router;
