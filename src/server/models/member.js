const mongoose = require('mongoose');
const memberSchema = require('../schemas/member');

const Member = mongoose.model('member', memberSchema);

module.exports = Member;
