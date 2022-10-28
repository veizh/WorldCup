const userSchema = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.SignIn = async (req,res) => {
    console.log("requete SignIn recu");

    const authorizedEmail =[
        "maximedurville95300@gmail.com",
        "admin@admin.com",
        "fx.matignon@gmail.com",
        "christine.matignon78@gmail.com",
        "a.germany@ag-consulting-expertise.fr",
        "nicolas.prevot@veolia.com",
"fcroise@sarpindustries.fr",
"romain.very@hotmail.fr",
"alain.arrignon@veolia.com",
"nicolas.prevot@veolia.com",
"jean-marie.tezza@veolia.com",
"benoit.saligot@veolia.com",
"vasseurdenis1300@gmail.com",
"nicolas.wyrebski@dalkia.fr",
"guillaume.coupeau@dalkia.fr",
"bruno.provost@free.fr",
"georges.monteiro@dalkia.fr",
"csabot@semardel.fr",
"florian.siby@idex.fr",
"olivier.denais@idex.fr",
"manu.web@live.fr",
"laurent.jonet@apave.com",
"olivier.preterre@apave.com",
"hilario.barbosa.esteves@gmail.com",
"david.carette@gmail.com",
"jeromebeaudouin@orange.fr",
"patricia.rochelle@heurteaux.com",
"loic.ternon@sedibex.fr",
"stephane.romaferreira@cmenergies.fr",
"benoit.bartiaux@suez.com",
"nanie.gweg@outlook.fr",
"leroytom@hotmail.fr",
"william.calmesnil@suez.com",
"bertrand.maluga@suez.com",
"thierry.gadioux@suez.com",
"lilian.crespin@suez.com",
"nabila.mameri@suez.com",
"mathieuferon@yahoo.fr",
"christophe.borges@engie.com",
"stevendhotel@gmail.com",
"pat.dacosta27@gmail.com",
"n.gaboriaud@bmfc.fr",
"begad.m@bmfc.fr",
"swerey@semardel.fr",
"didier.valet@dalkia.fr",
"lucie.legros@veolia.com",
"lionel.bresson@suez.com",
"yannick.le-luduec@dalkia.fr",
"heufgb@gmail.com",
"eric.courtade@orange.fr",
"eric.fosse@siaap.fr"
    ]

    const {email,pseudo, societe,password,confirmPassword}= req.body
    /* err */
    if(!email || !pseudo || !societe || !password || !confirmPassword ) return res.status(400).json({errEmpty:'Un champ n\'est pas rempli'})
    if(authorizedEmail.findIndex((e)=>e===email)===-1) return res.status(400).json({errMailUnauthorized:'l\'email n\'est pas autorisé'})
    if(password !== confirmPassword) return res.status(400).json({errMatchPw:"Les passwords ne correspondent pas"})
    /* */
    req.body.password = await bcrypt.hash(req.body.password,10)
    delete req.body.confirmPassword

    const newUser = new userSchema({...req.body})

   newUser.save()
        .then(()=>{ 
            res.status(200).json({jwt:createJWT(newUser._id)})
        })
        .catch((errSignin) => res.status(400).json(errSignin))

}


exports.LogIn = async (req,res) => {
    console.log("requete LogIn recu");
    const {email,password}= req.body

    if(!email || !password ) return res.status(400).json({err:'Un champ n\'est pas rempli'})
    const user = await userSchema.findOne({email:email})

    if(!user) return res.status(400).json({errNotFind:"l'adressre email n'existe pas"})
    const mdpMatch = await bcrypt.compare(password,user.password)
    if(!mdpMatch){
        return res.status(401).json({errNotFind:"le mot de passe n'extiste pas"})
    }
    console.log(user._id);
    let response ={jwt:createJWT(user._id)}
    res.status(200).json(response)

}
function createJWT(id){
    return jwt.sign({id:id.toString()}, 'shhhhh')
}

exports.verifyJWT = async (req, res) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const {id} = jwt.verify(token, 'shhhhh');
           
         const user =  await  userSchema.findById(id)
         if(user){
            return res.status(200).json(user)
         }
         else res.status(404).json({msg:'didnt match'})

    } catch (error) {
      // console.log(error);
      return res.status(401).json({ error: 'Auth error!' });
      // if (!CallbackError) return;
      // return CallbackError();
    }
  };
  exports.getAll =async (req,res)=>{
    let players = await userSchema.find()
    const AllPlayers =[]
    function FindAllPlayer(){
      return players.map((e,index)=>{
        const tmp={...players[index]}
        delete tmp._doc.password
       return tmp._doc
      })
    }

    return res.status(200).json(FindAllPlayer())
  }

