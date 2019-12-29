const express = require("express");
const router = express.Router();
const Theme = require('../../models/Theme');

router.get("/test", (req, res) => res.json({ msg: "This is the themes route" }));

router.get('/', (req, res) => {
    Theme.find()
        .then(themes => res.json(themes))
        .catch(err => res.status(404).json({ nothemesfound: 'No themes found' }));
});

router.get('/:id', (req, res) => {
    Theme.findById(req.params.id)
        .populate('samples')
        .then(theme => res.json(theme))
        .catch(err =>
            res.status(404).json({ nothemefound: err })
        );
});

module.exports = router;
