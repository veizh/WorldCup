const { json } = require("body-parser")
const ResultSchema = require("../models/results")
const ResultElimSchema = require("../models/resultsElim")
const user = require("../models/user")

const userSchema = require("../models/user")
exports.createResult = async (req,res)=>{
    console.log('post recu')
    const newResult = new ResultSchema({...req.body})
    newResult.save()
    let players = await userSchema.find()
   
    const result =  req.body
     const tmp = result.idMatch
    players.map( async (e)=>{
       
        console.log("user : " +e._id);
        
        
       // si l'id du pari existe dans une des tables et que le resultat correspond a celui du user => ajouter des points 
      if((e.pari_a!==null && e.pari_a[tmp] && e.pari_a[tmp]===result.result) ||
         (e.pari_b!==null && e.pari_b[tmp] && e.pari_b[tmp]===result.result) ||
         (e.pari_c!==null && e.pari_c[tmp] && e.pari_c[tmp]===result.result) ||
         (e.pari_d!==null && e.pari_d[tmp] && e.pari_d[tmp]===result.result) ||
         (e.pari_e!==null && e.pari_e[tmp] && e.pari_e[tmp]===result.result) ||
         (e.pari_f!==null && e.pari_f[tmp] && e.pari_f[tmp]===result.result) ||
         (e.pari_g!==null && e.pari_g[tmp] && e.pari_g[tmp]===result.result) ||
         (e.pari_h!==null && e.pari_h[tmp] && e.pari_h[tmp]===result.result)  ){

       console.log("cet user gagne : " + result.point +" points.");

      const newPoint =parseInt(e.point) + parseInt(result.point)
      console.log(e.point  + " ~ to ~ " + newPoint )

      await userSchema.updateOne({_id:e._id},{$set:{point:newPoint}})

      return 
        }
      else {
        console.log('Perdu');
        return  
      }
      })
    return  res.status(200).json({msg:"la mise a jour des points est fini"})


}
exports.createResultElim = async(req,res)=>{
  console.log('post recu')
  
  const newResult = new ResultElimSchema({...req.body})
    newResult.save()
    let players = await userSchema.find()
   let idMatch = newResult.idMatch
    players.map( async (e)=>{
      let tableau = e.pari_elim
      
        console.log("user : " +e._id);
        const test = tableau.find(i => (i.idMatch).toString() === newResult.idMatch)
        console.log(test);
        let newPoint = e.point
        console.log(e.point);
        if(tableau.find(i => (i.idMatch).toString() === newResult.idMatch)){
            if(test.result_a===newResult.result_a){
              newPoint = newPoint + newResult.point
              console.log("gagne A et gagne " + newResult.point);
              
            }
            if(test.result_b===newResult.result_b){
             
              newPoint = newPoint + newResult.point 
              console.log("gagne B et gagne " +newResult.point);
            }
             await userSchema.updateOne({_id:e._id},{$set:{point:newPoint}})
            console.log("Apres mise a jour l'user à: "+newPoint +" points.");
            return res.status(200).json()
        }
        else{
        return  

        }
})
}
