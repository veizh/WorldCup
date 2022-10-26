const mongoose = require('mongoose')

var resultElimSchema = mongoose.Schema({
    idMatch: { type: String, required: true},
    result_a:{ type: String},
    result_b:{ type: String},
    point:{type:Number,required:true}
})

module.exports = mongoose.model("resultElim",resultElimSchema)