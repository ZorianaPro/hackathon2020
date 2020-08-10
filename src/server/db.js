const mongoose = require('mongoose');

const connect = () => {
  return mongoose.connect(
    'mongodb+srv://zoriana:123123321@hackathon2020-673vc.mongodb.net/hack?retryWrites=true&w=majority',
    { useNewUrlParser: true },
    function(err) {
      if (err) {
        throw err;
      }
    }
  );
};

module.exports = {
  connect
};