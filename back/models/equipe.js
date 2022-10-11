const mongoose = require('mongoose')

const mongooseUniqueValidator = require('mongoose-unique-validator')

var equipeSchema = mongoose.Schema({
    equipe: { type: String, required: true, unique:true },
    poule:{ type: String, required: true }
})

equipeSchema.plugin(mongooseUniqueValidator)
module.exports = mongoose.model("equipe",equipeSchema)