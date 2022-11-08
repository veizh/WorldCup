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
        Navigate("/bet")    
        
        
        
        
        
        
    },[clicked])
  
    return (
            <>
                <Header></Header>
                <div className="bgBet"></div>
                <div className="col">
                    <div className="bonus">
                        <h1> Ces paris permettrons de départager les gagnants en cas d'égalité parfaite sinon ils ne rentreront pas en compte dans le classement ! </h1>
                        <label className="labelBonus" htmlFor="Bestplayer">Quel joueur marquera le plus de buts selon vous ?</label>
                        <input className="inputBonus" type="text" name="bestPlayer" placeholder="Ex: Mbappe" />
                        <label className="labelBonus" htmlFor="bestPlayergoals">Combien de buts marqués par le meilleur joueur de la compétition ?</label>
                        <input className="inputBonus" type="text" name="bestPlayergoals" placeholder="Ex: 7" />
                        <label className="labelBonus" htmlFor="nbGoals">Combien de buts marqués au total dans la compétition ?</label>
                        <input className="inputBonus" type="text" name="nbGoals" placeholder="Ex: 103" />
                
                
                        <button className="send" onClick={pushBdd}>Envoyer </button>
                    </div>
                </div>
            </>
    )
            
}
export default FormBonus