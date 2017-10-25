const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new mongoose.Schema({
	question: {
		type: String
	},
    description: {
        type: String,
        default: ''
    },
    _answers: [ {
        type: Schema.Types.ObjectId,
        ref: 'Answer',
    } ],
    creator: {
        type: String
    }
}, {timestamps: true})


const Question = mongoose.model('Question', QuestionSchema)