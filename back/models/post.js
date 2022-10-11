const mongoose = require('mongoose')

var dateNow = new Date()
var postSchema = mongoose.Schema({
    title: { type: String, required: true},
    desc:{ type: String, required: true },
    date:{type:String, default:dateNow.toLocaleDateString("fr")}
})

module.exports = mongoose.model("post",postSchema)