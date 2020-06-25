const Idea = require('../models/idea');

const create = (data) => {
	return Idea.create(data);
};

const showAll = () => {
	return Idea.find({}).exec()
};

const addTeamMember = (id, member) => {
	return Idea.findByIdAndUpdate(id,
		{
			$push: { "team": member }
		}).exec()
};

const deleteAll = () => {
	return Idea.deleteMany({})
};

module.exports = {
	create,
	showAll,
	addTeamMember,
	deleteAll
};