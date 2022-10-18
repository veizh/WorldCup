const usersSchema = require("../models/user")


exports.checkParis = async (req,res)=>{
    
    const user = await usersSchema.findById(req._id);
    if(user){
        res.status(200).json(user.pari)
    }
     
     console.log(user.pari); 
}
exports.postParis = async (req,res) =>
{
    console.log("post envoyé");
    const bet= req.body
    const userId =req._id
    const pari = "pari_" + req.query.poule
    const obj = { }
    obj[pari]= bet
    
    if(req.query.poule==="elim"){
        let user = await usersSchema.find({_id:userId})
        let ParielimArray = user[0].pari_elim
        console.log(ParielimArray);
        const re = ParielimArray.find(e => e.idMatch === bet.idMatch)
        console.log(re);
        if(re){
            await usersSchema.updateOne({_id:userId},{$set:{}})
            console.log("ecraser");
            return res.status(200).json({msg:"ecraser"})
        }
        if(!re){
            await usersSchema.updateOne({_id:userId},{$addToSet:obj})
            console.log("creer");
            return res.status(200).json({msg:"creer"})
        }


        return res.status(200).json(obj)
    }
    
   else{
    await usersSchema.updateOne({_id:userId},{$set:obj});

    return res.status(200).json(bet)} 

}
