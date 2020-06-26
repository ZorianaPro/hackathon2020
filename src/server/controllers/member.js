const Member = require('../models/member');
const Idea = require('../models/idea');

const create = (data) => {
	return Member.create(data);
};

const showAll = () => {
	return Member.find({}).exec()
};

const addNewMember = async (id, member) => {
	const newMember = await Member.create(member);
	return Idea.findByIdAndUpdate(id,
		{
			$push: { "team": newMember._id }
		});
};

const deleteAll = () => {
	return Member.deleteMany({})
};

module.exports = {
	create,
	showAll,
	addNewMember,
	deleteAll
};