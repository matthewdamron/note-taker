const router = require('express').Router();
const { findById, createNewNote, editExistingNote, deleteExistingNote } = require('../../lib/notes');

const { v4: uuidv4 } = require('uuid');

const { notes } = require('../../data/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    let result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    if (req.body.id) {
        const note = editExistingNote(req.body, notes);
        res.json(note);
    } else {
        req.body.id = uuidv4();
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    notes.splice(req.params.id, 1);
    deleteExistingNote(notes);
    res.json(notes);
});

module.exports = router;