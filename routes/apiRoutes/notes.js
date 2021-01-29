const router = require('express').Router();
const {
    findById,
    createNewNote,
    editExistingNote
} = require('../../lib/notes');
// const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const {
    notes
} = require('../../data/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    //   if (req.query) {
    //     results = filterByQuery(req.query, results);
    //   }
    res.json(results);
});

router.post('/notes', (req, res) => {

    // if (req.body.id) {
    //     console.log(req.body.id);
    // } else {
        // set id based on what the next index of the array will be
        
        if (req.body.id) {
            const note = editExistingNote(req.body, notes);
            res.json(note);
        } else {
            req.body.id = notes.length.toString();
            const note = createNewNote(req.body, notes);
            res.json(note);
        }
        

        // console.log(activeNote.id);
        // if (!validateAnimal(req.body)) {
        //   res.status(400).send('The animal is not properly formatted.');
        // } else {
        
        // }
    // }

});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// router.post('/animals', (req, res) => {
//   // set id based on what the next index of the array will be
//   req.body.id = animals.length.toString();

//   if (!validateAnimal(req.body)) {
//     res.status(400).send('The animal is not properly formatted.');
//   } else {
//     const animal = createNewAnimal(req.body, animals);
//     res.json(animal);
//   }
// });

module.exports = router;