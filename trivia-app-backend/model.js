const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Trivia = new Schema({
    trivia_questions: {
        type: String
    },
    trivia_answer: {
        type: String
    },
    trivia_option1: {
        type: String
    },
    trivia_option2: {
        type: String
    },
    trivia_option3: {
        type: String
    },
    trivia_option4: {
        type: String
    },
    trivia_difficulty: {
        type: String
    },
    trivia_completed: {
        type: Boolean
    },
});

module.exports = mongoose.model('Trivia', Trivia);