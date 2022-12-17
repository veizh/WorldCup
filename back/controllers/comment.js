const equipe = require("../models/equipe")
const commentSchema = require("../models/comment")

exports.create = (req,res)=>{
    console.log('article recu')
    const newComment = new commentSchema({...req.body})
    newComment.save()
    .then(()=> res.status(200).json())
        return res.status(200).json({msg:"equipe created"})
}

exports.getComments= async (req,res)=>{
    const comments = await commentSchema.find()

        return res.status(200).json(equipes)
    
}