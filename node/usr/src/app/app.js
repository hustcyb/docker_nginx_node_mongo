var express = require('express');
var mongoose = require('mongoose');
var models = require('./models');

var Student = models.Student;
mongoose.connect('mongodb://mongo/local');
var app = express();
app.get('/init', function(req, res) {
	var user = new Student({
		id: 1,
		name: 'Jim',
		age: 10
	});
	user.save();
	res.send('Data inited');
});

app.get('/students', function(req, res) {
	Student.find(function(err, doc) {
		if (err) {
			res.send(err);
		} else {
			res.json(doc);
		}
	});
});

app.listen(3000);