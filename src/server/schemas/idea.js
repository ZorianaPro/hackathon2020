const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ideaSchema = new Schema({
	name: {
		unique: true,
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	team: [
		{
			firstName: {
				type: String
			},
			lastName: {
				type: String,
			},
			email: {
				type: String,
				unique: true
			},
			position: {
				type: String,
			}
		}
	]

}, {timestamps: true});


module.exports = 	ideaSchema;