var mongoose = require('mongoose');
var userSchema = mongoose.Schema({	
	name: String,
	mail: String,
	password: String
	
});module.exports = mongoose.model('ex_users', userSchema);