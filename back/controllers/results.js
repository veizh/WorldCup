const ResultSchema = require("../models/results")

exports.createResult = (req,res)=>{
    console.log('post recu')
    const newResult = new ResultSchema({...req.body})
    newResult.save()
    .then(()=> res.status(200).json())
        return res.status(200).json({msg:"result push"})
}

