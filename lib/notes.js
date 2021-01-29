const fs = require('fs');
const path = require('path');

// function filterByQuery(query, notesArray) {
//   let personalityTraitsArray = [];
//   let filteredResults = notesArray;
//   if (query.personalityTraits) {
//     if (typeof query.personalityTraits === 'string') {
//       personalityTraitsArray = [query.personalityTraits];
//     } else {
//       personalityTraitsArray = query.personalityTraits;
//     }
//     console.log(personalityTraitsArray);
//     personalityTraitsArray.forEach(trait => {
//       filteredResults = filteredResults.filter(
//         animal => animal.personalityTraits.indexOf(trait) !== -1
//       );
//     });
//   }
//   if (query.diet) {
//     filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
//   }
//   if (query.species) {
//     filteredResults = filteredResults.filter(animal => animal.species === query.species);
//   }
//   if (query.name) {
//     filteredResults = filteredResults.filter(animal => animal.name === query.name);
//   }
//   return filteredResults;
// }

// function findById(id, notesArray) {
//   const result = notesArray.filter(animal => animal.id === id)[0];
//   return result;
// }

function createNewNote(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../data/notes.json'),
    JSON.stringify({ notes }, null, 2)
  );
  return note;
}

// function validateAnimal(animal) {
//   if (!animal.name || typeof animal.name !== 'string') {
//     return false;
//   }
//   if (!animal.species || typeof animal.species !== 'string') {
//     return false;
//   }
//   if (!animal.diet || typeof animal.diet !== 'string') {
//     return false;
//   }
//   if (!animal.personalityTraits || !Array.isArray(animal.personalityTraits)) {
//     return false;
//   }
//   return true;
// }

// module.exports = {
//   filterByQuery,
//   findById,
//   createNewAnimal,
//   validateAnimal
// };

module.exports = {
  createNewNote
};