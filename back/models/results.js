const mongoose = require('mongoose')

var resultSchema = mongoose.Schema({
    idMatch: { type: String, required: true},
    result:{ type: String},
    point:{type:Number,required:true}
})

module.exports = mongoose.model("result",resultSchema)