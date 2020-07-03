const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		sparse: true
	},
	position: {
		type: String,
		required: true
	}

}, {
	timestamps: true,
	emitIndexErrors: true
});

const handleE11000 = function(error, res, next) {
	if (error.name === 'MongoError' && error.code === 11000) {
		next(new Error('There was a duplicate key error'));
	} else {
		next();
	}
};

memberSchema.post('save', handleE11000);
memberSchema.post('update', handleE11000);
memberSchema.post('findByIdAndUpdate', handleE11000);

module.exports = 	memberSchema;