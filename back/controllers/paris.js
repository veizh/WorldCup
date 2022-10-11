const usersSchema = require("../models/user")


exports.checkParis = async (req,res)=>{
    
    const user = await usersSchema.findById(req._id);
    if(user){
        res.status(200).json(user.pari)
    }
     
     console.log(user.pari); 
}
exports.postParis = async (req,res) =>{
    console.log("post envoyé");
    const bet= req.body
    console.log(bet);
    const userId =req._id
    const pari = "pari_" +req.query.poule
    const obj = {}
    obj[pari]=bet
   await usersSchema.updateOne({_id:userId},{$set:obj});

    res.status(200).json(bet)

}
