var questions = require('./../controllers/questions.js');
var path = require('path');

module.exports = function(app) {

	app.post('/users', users.login);

	app.get('/users/one', users.getID);

	app.get('/users/logout', users.logout);

	app.post('/questions', questions.create);
	// Create a new question in the database

	app.post('/answers', questions.create);
	// Create a new answer in the database

	app.get('/questions', questions.get);
	// Get all the questions

	// app.delete('/questions/:id', questions.delete);
	// // Delete a question

	app.get('/answers/:id', questions.getAnswers);
	// Get all of one question answers

	app.get('/questions/:id', questions.getQuestion);
	// Get a single question

	app.put('/answers', questions.like);
	// Add a like to a answer

	app.get('/questions/one/:id', questions.getAnswer)
	// Get a single answer

	app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"));
	})
	




