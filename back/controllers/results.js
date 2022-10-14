const ResultSchema = require("../models/results")
const userSchema = require("../models/user")
exports.createResult = async (req,res)=>{
    console.log('post recu')
    const newResult = new ResultSchema({...req.body})
    newResult.save()
    let players = await userSchema.find()
    
    const result =  await req.body
  await  players.map( async (e)=>{
       
        console.log("user : " +e._id);
       // si l'id du pari existe dans une des tables et que le resultat correspond a celui du user => ajouter des points 
      if((e.pari_test && e.pari_test[result.idMatch] && e.pari_test[result.idMatch]===result.result) ||
         (e.pari_a!==null && e.pari_a[result.idMatch] && e.pari_a[result.idMatch]===result.result) ||
         (e.pari_b!==null && e.pari_b[result.idMatch] && e.pari_b[result.idMatch]===result.result) ||
         (e.pari_c!==null && e.pari_c[result.idMatch] && e.pari_c[result.idMatch]===result.result) ||
         (e.pari_d!==null && e.pari_d[result.idMatch] && e.pari_d[result.idMatch]===result.result) ||
         (e.pari_e!==null && e.pari_e[result.idMatch] && e.pari_e[result.idMatch]===result.result) ||
         (e.pari_f!==null && e.pari_f[result.idMatch] && e.pari_f[result.idMatch]===result.result) ||
         (e.pari_g!==null && e.pari_g[result.idMatch] && e.pari_g[result.idMatch]===result.result) ||
         (e.pari_h!==null && e.pari_h[result.idMatch] && e.pari_h[result.idMatch]===result.result)  ){

       console.log("cet user gagne : " + result.point +" points.");

      const newPoint =parseInt(e.point) + parseInt(result.point)
      
      console.log(e.point  + " ~ to ~ " + newPoint )
      await userSchema.updateOne({_id:e._id},{$set:{point:newPoint}})
      console.log(e.point);
      res.status(200).json({msg:"end"})
        }
        else {
          console.log('Perdu');
        }
        })
    return  res.status(200).json({msg:"la mise a jour des points est fini"})


}

