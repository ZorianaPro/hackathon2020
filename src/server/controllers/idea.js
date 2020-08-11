const Idea = require('../models/idea');

const create = (content) => {
  return Idea.create(content);
};

const showAll = () => {
  return Idea.find({}).exec();
};

const deleteAll = () => {
  return Idea.deleteMany({});
};

module.exports = {
  create,
  showAll,
  deleteAll
};