const mongoose = require('mongoose')


var matchSchema = mongoose.Schema({
    id: { type: Number, required: true},
    phase:{type:String,required:true},
    option_a:{ type: String, required: true },
    option_b:{ type: String, required: true },
    placeholder_a:{ type: String, required: true },
    placeholder_b:{ type: String, required: true }
})

module.exports = mongoose.model("match",matchSchema)