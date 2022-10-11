const matchSchema = require("../models/match")

exports.createMatch = (req,res)=>{
    console.log('match creer')
    const newMatch = new matchSchema({...req.body})
    newMatch.save()
    .then(()=> res.status(200).json())
        return res.status(200).json({msg:"match created"})
}
exports.getMatch = async (req,res)=>{
    const ArrayPost = await matchSchema.find({});
    res.json(ArrayPost) 
}
