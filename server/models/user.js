const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
	name: {
		type:String,
		required: [true, "Please enter a name."]
	}
})
const User = mongoose.model('User', UserSchema)