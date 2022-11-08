import React, { useContext,useState} from "react"
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserCtx } from "../../../App";
import Header from "../../../components/header/_Header"
import Selectbox from "../../../components/select/_Select"
import { addHeaderJWT } from "../../../utils/header";
import { server } from "../../../utils/servers";
const FormVainqueurs = () =>{
    const [Matches,SetMatches] =useState(null)
    const user = useContext(UserCtx)
    const Navigate = useNavigate()
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
        Navigate("/Bet")
    }
    let test = null
    if(user && user[0].pari_vainqueurs){
         test= user[0].pari_vainqueurs
    }
    return(
        <>
        <Header></Header>
        <div className="bgBet"></div>
            <div className="col">
                <h1>Selectionnez les équipes que vous pensez voir à la 1ère, 2ème, 3ème et 4ème place !</h1>
                <label htmlFor="premier">Quelle équipe finira première selon vous ?</label>
                <Selectbox name="premier" placeholder={test !== null?test.premier:"Vainqueur"} option="all"/>
                <label htmlFor="deuxime">Quelle équipe finira deuxième selon vous ?</label>
                <Selectbox name="deuxime" placeholder={test !== null?test.deuxieme:"Deuxième"} option="all"/>
                <label htmlFor="troisieme">Quelle équipe finira troisième selon vous ?</label>
                <Selectbox name="troisieme" placeholder={test !== null?test.troisieme:"Troisième"} option="all"/>
                <label htmlFor="quatrieme">Quelle équipe finira quatrième selon vous ?</label>
                <Selectbox name="quatrieme" placeholder={test !== null?test.quatrieme:"Quatrième"} option="all"/>
                <button className='pushBtn'onClick={postResult}>Envoyer</button>
            </div>
        </>
    )
}
export default FormVainqueurs