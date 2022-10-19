import React, { useContext,useEffect,useState  } from "react"
import PariPoule from "../../../components/pari/_PariPoule"
import { server } from "../../../utils/servers";
import Header from "../../../components/header/_Header"
import { addHeaderJWT } from "../../../utils/header"
import { UserCtx } from "../../../App"
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./bonus.css"
  function FormBonus(props) {
    const [user] = useContext(UserCtx)
    const poule =useParams()
    const [createPari,setPari] = useState(undefined)
    const Navigate = useNavigate()
    const [clicked,setClicked] = useState(null)
    function pushBdd(){
        setClicked(clicked+1)
    }

   

    useEffect( ()=>{
        if(clicked===null) return
        
        let ArrayResult = []
        let inputs = document.querySelectorAll('.inputBonus')
        let test = 0
       
        console.log(inputs);
        inputs.forEach((e)=>{
            if(e.value===""){
                return test=1
            }
             let tmp = {}
            tmp["id"]=e.name
            tmp["result"]=e.value
            ArrayResult.push(tmp)
        })
        if (test===1)return alert('Il manque des réponses')
        console.log(ArrayResult);
        
          const headers = addHeaderJWT()
           headers.append("Content-Type","application/json")
           fetch(server + "/paris/post?poule="+"bonus",{
               
               method:"put",
               headers:headers,
               body:JSON.stringify(ArrayResult)
           })
           .then(res=>res.json())
            
        
        
        
        
        
        
    },[clicked])
    /*Il faut lui balancer les equipes de la poule en question via le paremetre URl*/

  
   //     if(createPari===undefined){
   //         fetch(server + "/equipe/getTeamGroup", {
   //             method:"POST",
   //             headers:{
   //                 "Content-Type":"application/json"
   //             },
   //             body: JSON.stringify(poule)
   //         })
   //             .then(res=>res.json())
   //             .then(res => setPari(res))
   //     }
   //
   // if(createPari===undefined){
   //     return (
   //         <>
   //         <Header></Header>
   //             <div className="bgBet"></div>
   //             <div className="col"><button className="send" onClick={pushBdd}>Envoyer </button>
   //             </div>
   //         </>
   //     )
   // }
    //function findOpponents (){
    //    let tmp = [...createPari]
//
    //    const finalArray = []
    //        for(let i=0 ; i< createPari.length ; i++){
    //            
    //            tmp = tmp.filter(a => a!== createPari[i])
    //            tmp.forEach(e =>
//
    //                finalArray.push({"a":e.equipe,"b":createPari[i].equipe,"id": poule.poule + e.equipe+"/"+createPari[i].equipe})
    //                )
    //        }
    //        return finalArray
    //}
    //const array = findOpponents()
    return (
            <>
                <Header></Header>
                <div className="bgBet"></div>
                <div className="col">
                    <div className="bonus">
                        <h1> Ces paris permettrons de departager les gagnants en cas d'égalité parfaite sinon ils ne rentreront pas en compte dans le classement ! </h1>
                        <label className="labelBonus" htmlFor="Bestplayer">Quel joueur marquera le plus de buts selon vous ?</label>
                        <input className="inputBonus" type="text" name="bestPlayer" placeholder="Mbappe" />
                        <label className="labelBonus" htmlFor="bestPlayergoals">Combien de buts marqués par le meilleur joueur de la compétition ?</label>
                        <input className="inputBonus" type="text" name="bestPlayergoals" placeholder="7" />
                        <label className="labelBonus" htmlFor="nbGoals">Combien de buts marqués au total dans la compétition ?</label>
                        <input className="inputBonus" type="text" name="nbGoals" placeholder="103" />
                
                
                        <button className="send" onClick={pushBdd}>Envoyer </button>
                    </div>
                </div>
            </>
    )
            
}
export default FormBonus