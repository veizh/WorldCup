import React, { useContext,useEffect,useState  } from "react"
import PariPoule from "../../../components/pari/_PariPoule"
import { server } from "../../../utils/servers";
import Header from "../../../components/header/_Header"
import { addHeaderJWT } from "../../../utils/header"
import { UserCtx } from "../../../App"
import { Navigate, useNavigate, useParams } from "react-router-dom";


  function FormPoule(props) {
    const [user] = useContext(UserCtx)
    const poule =useParams()
    const [createPari,setPari] = useState(undefined)
    const Navigate = useNavigate()
    const [clicked,setClicked] = useState(0)
    function pushBdd(){
        setClicked(clicked+1)
    }
   

    useEffect( ()=>{
        const data = document.querySelectorAll('.containerPari');
        
        let test = 0
        let tmp = {}
        data.forEach((e)=>{
            tmp[e.dataset.id]=e.dataset.selected
            if(e.dataset.selected===undefined){
                test = 1
            }
            if(e.dataset.selected){
                test = test +1
                
            }
        })
        if(test===1) return alert("Veuillez remplir tout les matchs")
        if(test===6){const headers = addHeaderJWT()
        headers.append("Content-Type","application/json")
        fetch(server + "/paris/post?poule="+poule.poule,{
            
            method:"put",
            headers:headers,
            body:JSON.stringify(tmp)
        })
        .then(res=>res.json())
        Navigate('/bet')
            
        }
        
        
        
        
        
    },[clicked])
    /*Il faut lui balancer les equipes de la poule en question via le paremetre URl*/

  
        if(createPari===undefined){
            fetch(server + "/equipe/getTeamGroup", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(poule)
            })
                .then(res=>res.json())
                .then(res => setPari(res))
        }
   
    if(createPari===undefined){
        return (
            <>
            <Header></Header>
                <div className="bgBet"></div>
                <div className="col"><button className="send" onClick={pushBdd}>Envoyer </button>
                </div>
            </>
        )
    }
    function findOpponents (){
        let tmp = [...createPari]

        const finalArray = []
            for(let i=0 ; i< createPari.length ; i++){
                
                tmp = tmp.filter(a => a!== createPari[i])
                tmp.forEach(e =>

                    finalArray.push({"a":e.equipe,"b":createPari[i].equipe,"id": poule.poule + e.equipe +createPari[i].equipe})
                    )
            }
            return finalArray
    } 
    const array = findOpponents()
     if(user){
        const tmp2 = "pari_"+poule.poule
        const preset = user[tmp2]
        for(let i = 0 ; i<array.length;i++){
            if(preset!==null){
            array[i].memory = preset[array[i].id]

            }
        }
       
    }
   
    return (
            <>
                <Header></Header>
                <div className="bgBet"></div>
                <div className="col">
                    <h1>Faites vos paris pour la poule {poule.poule.toUpperCase()} !</h1>
                {array.map(e=>{
                   return  <PariPoule a={e.a} 
                        b={e.b} 
                        id={e.id} 
                        key={e.id} 
                        memory={user?e.memory:""}
                        />
                })}
                </div>
            </>
    )
            
}
export default FormPoule