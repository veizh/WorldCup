const equipe = require("../models/equipe")
const equipeSchema = require("../models/equipe")

exports.createEquipe = (req,res)=>{
    console.log('post recu')
    const newEquipe = new equipeSchema({...req.body})
    newEquipe.save()
    .then(()=> res.status(200).json())
        return res.status(200).json({msg:"equipe created"})
}

exports.getTeamGroup= async (req,res)=>{
    if(req.body.poule==="all"){
        const equipes = await equipeSchema.find()

        return res.status(200).json(equipes)
    }
    if(req.body.poule.length>1 && req.body.poule!=="all"){ 
            const equipes = []
            const poules= req.body.poule
            const poule =  poules.split(' ')
            const A = await equipeSchema.find({"poule":poule[0]})
            const B = await equipeSchema.find({"poule":poule[1]})

            equipes.push(...A,...B)

            console.log(equipes)
            return res.status(200).json(equipes)

        }
        // return res.status(200).json(equipes)
     
    else{
        const equipes =  await equipeSchema.find(req.body)
        return res.status(200).json(equipes)
    }
    
}