
const comment = require("../models/comment")

exports.createComment = (req,res)=>{
    console.log('post recu')
    const newComment = new comment({...req.body})
    newComment.save()
    .then(()=> res.status(200).json())
        return res.status(200).json({msg:"comment created"})
}