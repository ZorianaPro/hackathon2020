const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ideaSchema = new Schema({
	name: String,
	description: String,
	members: Array
}, {timestamps: true});


module.exports = 	ideaSchema;