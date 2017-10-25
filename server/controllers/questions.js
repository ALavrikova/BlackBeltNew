const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const Answer = mongoose.model('Answer');
const User = mongoose.model('User')

module.exports = {

    create: function (req, res) {
        var newQuestion = new Question({question: req.body.question, description: req.body.description, creator: req.body.creator});
        newQuestion.save((err) => {
            if(err){
                console.log("Error saving a question")
                return res.json(err);
            }
        });
        var newAnswer = new Answer({option: req.body.answer, details: req.body.details, likes: 0});
        newAnswer._question = newQuestion._id;
        newAnswer.save((err) => {
            if(err){
                return res.json(err);
            }
        });
        return res.json("!")
    },

    getQuestion: function (req, res) {
        Question.findOne({_id: req.params.id}, (err, question) => {
            if(err) {
                return res.json(err);
            }
            return res.json(question);
        })
    },

    get: function (req, res) {
        Question.find({}, (err, questions) => {
            if(err){
                return res.json(err);
            }
            return res.json(questions);
        })
    },

    getAnswer: function (req, res) {
        Answer.findOne({_id: req.params.id}, (err, answer) => {
            if(err){
                return res.json(err);
            }
            return res.json(answer)
        })
    },

    getAnswers: function (req, res) {
        Answer.find({_question: req.params.id}, (err, answers) => {
            if(err) {
                return res.json(err);
            }
            return res.json(answers);
        })
    },

    like: function (req, res) {
        Answer.update({_id: req.body._id},{$inc: {likes: 1}}, (err) => {
            if(err){
                return res.json(err);
            }
            return res.json("Liked")
        })
    },

    login: function (req, res) {
        User.findOne({name: req.body.name}, (err, user) => {
            if(err){
                return res.json(err)
            }
            else if(user){
                req.session.user = user
                res.json({user: user})
            }
            else{
                let user = new User(req.body);
                user.save((err) => {
                    if(err){
                        return res.json(err);
                    }
                    else{
                        req.session.user = user;
                        res.json({user: user});
                    }
                })
            }
        })
    },

    getID: function (req, res) {
        if(req.session.user){
            return res.json(req.session.user);
        }
        else{
            return res.json("Not logged in")
        }
    },

    logout: function (req, res) {
        req.session.destroy()
        return res.json();
    }
}












