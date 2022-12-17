const mongoose = require('mongoose')

var commentSchema = mongoose.Schema({
    comment: { type: String, required: true},
    pseudo:{ type: String, required: true }
})

module.exports = mongoose.model("comment",commentSchema)