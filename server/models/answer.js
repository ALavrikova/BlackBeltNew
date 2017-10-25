const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new mongoose.Schema({
    answer: {
        type: String
    },
    details: {
        type: String,
        default: ''
    },
    likes:{
        type: Number,
        required: true,
        default: 0
    },
    _question: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    },
        creator: {
        type: String
    }
}, {timestamps: true})

const Answer = mongoose.model('Answer', AnswerSchema)