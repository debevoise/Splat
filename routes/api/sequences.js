const express = require("express");
const router = express.Router();
const Sequence = require('../../models/Sequence');

router.get("/test", (req, res) => res.json({ msg: "This is the sequences route" }));

router.get('/', (req, res) => {
    Sequence.find()
        .then(sequences => res.json(sequences))
        .catch(err => res.status(404).json({ error: err || "Sequences not found" }));
});

router.get('/:id', (req, res) => {
    Sequence.findById(req.params.id)
        .populate({
            path: 'tracks.sample',
            model: "Sample"
        })
        .then(sequence => res.json(sequence))
        .catch(err =>
            res.status(404).json({ error: err || "Sequence not found" })
        );
});

module.exports = router;
