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
	if (error.name === 'MongoError') {
		if (error.code === 11000) {
			if (error.keyPattern.email) {
				next(new Error(`This email is used. Please, use a different email`));
			} else {
				next(new Error(`There was a duplicate key error`));
			}
		} else {
			next(new Error(`Something went terribly wrong. Contact zoryana.lesyk@experteer.com to fix it`));
		}
	} else {
		next();
	}
};

memberSchema.post('save', handleE11000);
memberSchema.post('update', handleE11000);
memberSchema.post('findByIdAndUpdate', handleE11000);

module.exports = 	memberSchema;