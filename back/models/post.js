const mongoose = require('mongoose')

var dateNow = Date.now()
dateNow = dateNow * 1000
var postSchema = mongoose.Schema({
    title: { type: String, required: true},
    desc:{ type: String, required: true },
    date:{type:String, default:dateNow}
})

module.exports = mongoose.model("post",postSchema)