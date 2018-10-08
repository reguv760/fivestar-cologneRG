const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CologneSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String
  },
  likes: {
    type: Number,
    default: 0
  },
  username: {
    type: String
  }

})

module.exports = mongoose.model('Cologne', CologneSchema);