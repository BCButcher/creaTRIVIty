const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const triviaRoutes = express.Router();
const PORT = 4000;

let Trivia = require('./model');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/trivia', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB's fucking database connection has been established suc-fuckin'-cessfully");
})

app.get('/trivia/list', async function(req, res) {
    const trivias = await Trivia.find({});
    res.json(trivias);
});

app.get('/trivia/:id', async function(req, res) {
    let id = req.params.id
    const trivia = await Trivia.findById(id)
    res.json(trivia);
});

app.post('/trivia/update/:id', async function(req, res) {
    let trivia = await Trivia.findById(req.params.id)
    if (!trivia) {
        res.status(404).send("Did you know you're a piece of shit");
    } else {
        trivia.trivia_questions = req.body.trivia_questions;
        trivia.trivia_answer = req.body.trivia_answer;
        trivia.trivia_option1 = req.body.trivia_option1;
        trivia.trivia_option2 = req.body.trivia_option2;
        trivia.trivia_option3 = req.body.trivia_option3;
        trivia.trivia_option4 = req.body.trivia_option4;
        trivia.trivia_difficulty = req.body.trivia_difficulty;
        trivia.trivia_completed = req.body.trivia_completed;

        trivia.save().then(trivia => {
                res.json('Trivia updated... BITCH!!!');
            })
            .catch(err => {
                res.status(400).send("Hey - DICK... you fucked up again. The update is not FUCKIN' possible!!!")
            });
    }
})

app.post('/trivia/add', async function(req, res) {
    let trivia = await new Trivia(req.body)
    trivia.save()
        .then(trivia => {
            res.status(200).json({ 'trivia': 'trivia added success' });
        })
        .catch(err => {
            res.status(400).send('adding new trivia failed');
        });
});

app.listen(PORT, function() {
    console.log("Muthafuckin' server is running on Port: " + PORT + " muthafucka!");
});