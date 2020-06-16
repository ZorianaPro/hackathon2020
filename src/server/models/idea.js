const mongoose = require('mongoose');
const ideaSchema = require('../schemas/idea');

const Idea = mongoose.model('idea', ideaSchema);

module.exports = Idea;
