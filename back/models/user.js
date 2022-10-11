const mongoose = require('mongoose')

const mongooseUniqueValidator = require('mongoose-unique-validator')

var userSchema = mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    societe:{ type: String, required: false },
    pseudo:{type:String , required:true},
    pari_a:{type:Object ,default:null},
    pari_b:{type:Object ,default:null},
    pari_c:{type:Object ,default:null},
    pari_d:{type:Object ,default:null},
    pari_e:{type:Object ,default:null},
    pari_f:{type:Object ,default:null},
    pari_g:{type:Object ,default:null},
    pari_h:{type:Object ,default:null},
    pari_test:{type:Object ,default:null},
    pari_elim:{type:Object,default:{}},
    point:{type:Number, default:0},
    admin:{type:Boolean, default:false}
    })
userSchema.plugin(mongooseUniqueValidator)

module.exports = mongoose.model("user",userSchema)