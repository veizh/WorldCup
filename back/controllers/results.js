const ResultSchema = require("../models/results")
const userSchema = require("../models/user")
exports.createResult = async (req,res)=>{
    console.log('post recu')
    const newResult = new ResultSchema({...req.body})
    newResult.save()
    let players = await userSchema.find()
    
    const result =  await req.body
    console.log(result);
    console.log(req.body);
    players.map( (e)=>{
      
       console.log("user :" +e._id);
       console.log(e.pari_a);
       console.log( e.pari_test[result.idMatch]);
       console.log(e.pari_test[result.idMatch]===result.result);
       // si l'id du pari existe dans une des tables et que le resultat correspond a celui du user => ajouter des points 
      if((e.pari_test && e.pari_test[result.idMatch] && e.pari_test[result.idMatch]===result.result) ||
         (e.pari_a && e.pari_a[result.idMatch] && e.pari_a[result.idMatch]===result.result) ||
         (e.pari_b && e.pari_b[result.idMatch] && e.pari_b[result.idMatch]===result.result) ||
         (e.pari_c && e.pari_c[result.idMatch] && e.pari_c[result.idMatch]===result.result) ||
         (e.pari_d && e.pari_d[result.idMatch] && e.pari_d[result.idMatch]===result.result) ||
         (e.pari_e && e.pari_e[result.idMatch] && e.pari_e[result.idMatch]===result.result) ||
         (e.pari_f && e.pari_f[result.idMatch] && e.pari_f[result.idMatch]===result.result) ||
         (e.pari_g && e.pari_g[result.idMatch] && e.pari_g[result.idMatch]===result.result) ||
         (e.pari_h && e.pari_h[result.idMatch] && e.pari_h[result.idMatch]===result.result)  ){
      console.log('Gagné');
      const newPoint =parseInt(e.point) + parseInt(result.point)
       userSchema.updateOne({_id:e._id},{$set:{point:newPoint}})
      console.log(e.point - parseInt(result.point) + " ~ to ~ " + e.point)
    }
    else {
      console.log('Perdu');
    }
    })
    return res.status(200).json({msg:"la mise a jour des points est fini"})


}

