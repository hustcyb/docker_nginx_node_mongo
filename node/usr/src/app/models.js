var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = new Schema({
	id: Number,
	name: String,
	age: Number
});

exports.Student = mongoose.model('Student', StudentSchema);