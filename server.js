const express = require('express');
const app = express();
const { notes } = require('./Develop/db/db')
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});

app.get('/api/notes/:id', (req,res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
      } else {
        res.send(404);
      }
});

// middleware
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());

app.post('/api/notes', (req, res) => {
    // set id based on what the next index of array
    req.body.id = notes.length.toString();
    // add note to json file and note array
    const note = createNewNote(req.body, notes);
    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});