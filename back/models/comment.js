const mongoose = require('mongoose')


var commentShema = mongoose.Schema({
    pseudo: { type: String, required: true, },
    content:{ type: String, required: true }
})

module.exports = mongoose.model("comment",commentShema)