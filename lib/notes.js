const { json } = require('express');
const fs = require('fs');
const path = require('path');
// const { delete, delete } = require('../routes/apiRoutes/notes');

function findById(id, notes) {
  const result = notes.filter(note => note.id === id)[0];
  return result;
}

function createNewNote(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../data/notes.json'),
    JSON.stringify({
      notes
    }, null, 2)
  );
  return note;
}

function editExistingNote(body, notes) {
  const result = notes.find(({ id }) => id === body.id)
  result.title = body.title;
  result.text = body.text;
  fs.writeFileSync(
    path.join(__dirname, '../data/notes.json'),
    JSON.stringify({
      notes
    }, null, 2)
  );
  return result;
}

function deleteExistingNote(notes) {
  
  // console.log(result);
  // console.log(result);
  fs.writeFileSync(
    path.join(__dirname, '../data/notes.json'),
    JSON.stringify({ notes }, null, 2)
  );
  // return notes;
  
  // console.log("\n" + notes);

}

module.exports = {
  findById,
  createNewNote,
  editExistingNote,
  deleteExistingNote
};