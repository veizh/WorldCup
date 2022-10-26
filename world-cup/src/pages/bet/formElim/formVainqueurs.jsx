import React, { useContext,useState} from "react"
import { createContext } from "react";
import Header from "../../../components/header/_Header"
import Selectbox from "../../../components/select/_Select"
import { addHeaderJWT } from "../../../utils/header";
import { server } from "../../../utils/servers";
const FormVainqueurs = () =>{
    const [Matches,SetMatches] =useState(null)
    if(Matches===null){
        fetch(server + "/match/get", {
        method:"get",
        headers:{"Content-Type":"application/json"}
    })
        .then(res => res.json())
        .then(res => SetMatches(res) )
    }
    function postResult(){
        const Reponse= document.querySelectorAll('.selected')
        const obj = 
        {
         "premier":Reponse[0].innerHTML,
         "deuxieme":Reponse[1].innerHTML,
         "troisieme":Reponse[2].innerHTML,
         "quatrieme":Reponse[3].innerHTML,
        }
        console.log(obj);
        const headers = addHeaderJWT()
        headers.append("Content-Type","application/json")
        fetch(server + "/paris/post?poule=vainqueurs",{
            
            method:"put",
            headers:headers,
            body:JSON.stringify(obj)
        })
        .then(res=>res.json())
    }
    
    return(
        <>
        <Header></Header>
        <div className="bgBet"></div>
            <div className="col">
                <h1>Selectionnez les équipes que vous pensez voir a la 1ère, 2ème, 3ème et 4ème place !</h1>
                <label htmlFor="premier">Quelle équipe finira première selon vous ?</label>
                <Selectbox name="premier" placeholder="Vainqueur" option="all"/>
                <label htmlFor="deuxime">Quelle équipe finira deuxième selon vous ?</label>
                <Selectbox name="deuxime" placeholder="Deuxième" option="all"/>
                <label htmlFor="troisieme">Quelle équipe finira troisième selon vous ?</label>
                <Selectbox name="troisieme" placeholder="Troisième" option="all"/>
                <label htmlFor="quatrieme">Quelle équipe finira quatrième selon vous ?</label>
                <Selectbox name="quatrieme" placeholder="Quatrième" option="all"/>
                <button className='pushBtn'onClick={postResult}>Envoyer</button>
            </div>
        </>
    )
}
export default FormVainqueurs