const Mongoose = require('mongoose');

const tokenSchema = new Mongoose.Schema({
    token : {type: String}
})

module.exports = mongoose.model('Token', tokenSchema);