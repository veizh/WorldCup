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
    if(req.body.poule==="bonus") {
        console.log("working");
    }
    if(req.body.poule==="vainqueurs"){
        console.log("working2");
    }
    if(req.query.poule==="elim"){
        let user = await usersSchema.find({_id:userId})
        let ParielimArray = user[0].pari_elim
        const re = ParielimArray.find(e => e.idMatch === bet.idMatch)
        const invRe = ParielimArray.filter(e => e.idMatch !== bet.idMatch)
        console.log({"Ce paris exiset deja":re});
        invRe.push(bet)
        const ecrase = {"pari_elim":invRe}

        if(re){
            await usersSchema.updateOne({_id:userId},{$set:ecrase})
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
     
    await usersSchema.updateOne({_id:userId},{$set:obj});

    return res.status(200).json(bet)

}
