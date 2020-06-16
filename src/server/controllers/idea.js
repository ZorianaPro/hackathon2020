const Idea = require('../models/idea');

const create = (data) => {
	return Idea.create(data);
};

const showAll = () => {
	return Idea.find({}).exec()
};


module.exports = {
	create,
	showAll
};