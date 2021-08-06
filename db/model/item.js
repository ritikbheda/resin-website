const mongoose = require("mongoose");

const item = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
})

module.exports = mongoose.model('Item', item);