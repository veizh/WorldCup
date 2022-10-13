const mongoose = require('mongoose')

var resulstSchema = mongoose.Schema({
    id: { type: String, required: true},
    result:{ type: String, required: true },
    point:{type:Number,required:true}
})

module.exports = mongoose.model("result",resulstSchema)