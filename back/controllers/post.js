const postSchema = require("../models/post")

exports.createPost = (req,res)=>{
    console.log('post recu')
    const newPost = new postSchema({...req.body})
    newPost.save()
    .then(()=> res.status(200).json())
        return res.status(200).json({msg:"post created"})
}
exports.getPosts = async (req,res)=>{
    const ArrayPost = await postSchema.find({});
    const ArrayPostRanged =  ArrayPost.sort((a,b) =>  b.date-a.date)
    console.log(ArrayPost);
    console.log(ArrayPostRanged);

    res.json(ArrayPostRanged) 
}
