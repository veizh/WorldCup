const equipeSchema = require("../models/equipe")

exports.createEquipe = (req,res)=>{
    console.log('post recu')
    const newEquipe = new equipeSchema({...req.body})
    newEquipe.save()
    .then(()=> res.status(200).json())
        return res.status(200).json({msg:"equipe created"})
}

exports.getTeamGroup= async (req,res)=>{
    const equipes =  await equipeSchema.find(req.body)
    res.status(200).json(equipes)
}