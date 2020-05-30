const express = require('express');
const app = express();
const { notes } = require('./Develop/db/db')
const PORT = process.env.PORT || 3002;
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

app.get('/api/notes', (req, res) => {
    fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
        res.json(JSON.parse(data));
    });
});

app.delete('/api/notes/:id', (req,res) => {
    fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
        console.log(data);
        let dataArray = JSON.parse(data);

        let dataFilter = dataArray.filter(note => note.id !== req.params.id);
        fs.writeFile('./Develop/db/db.json', JSON.stringify(dataFilter), (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log(`Note has been removed!`)
            }
            res.end();
        })
    });
});

// middleware
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());
app.use(express.static('Develop/public'));

app.post('/api/notes', (req, res) => {
    // set id based on what the next index of array
    req.body.id = uuidv4();
    fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
        console.log(data);
        let dataArray = JSON.parse(data);
        dataArray.push(req.body);
        fs.writeFile('./Develop/db/db.json', JSON.stringify(dataArray), (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log(`Note has been added!`)
            }
        })
    })
    res.json(req.body);
});

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});