import React, { useEffect } from "react"
import { useState } from "react"
import { server } from "../../utils/servers"
import "./rating.css"
import Header from "../../components/header/_Header"
import { UserCtx } from "../../App"
import { useContext } from "react"



const ColPlayer =(props)=>{
    return(
                <tr>
                    <td>{props.pseudo}</td>
                    <td>{props.points}</td>
                    <td>{props.classement}</td>
                </tr>    
        )
                
}

const Rating = () => {
    const [user] = useContext(UserCtx)
    const [players,SetPlayers] = useState(undefined)
 
    const headers = new Headers();

     function getAllUsers (){
         fetch(server +"/users/get",{headers:headers})
        .then(res => res.json())
        .then(res=>{
            SetPlayers(res)
        })
        
    }
    
  function findPos (){
    if(!players) return false

    const pos = players.sort((a,b)=>  b.point-a.point)
    return  pos.map((element,index) => {
        if(element._id === user._id){
            return index+1
        }
        return false
    });
  }
    if(players ===undefined){
    getAllUsers()
    }
    // JE DOIS ENCORE FETCH LES DONNEES DE L UTILISATEur CONNECTE POUR LES AFFICHE DANS L AUTRE TABLEAU
    return ( <> <Header></Header>
                 <div className="backgroundRating">

                 </div> <div className="gray">

                         <div className="title">LE CLASSEMENT</div>

                         <div className="tableContainer">
                                 <table>
                                         <thead >
                                             <tr>
                                                 <th>Moi</th>
                                                 <th>Mes points</th>
                                                 <th>Ma place</th>
                                             </tr>
                                         </thead>
                                     <tbody className="user"> 
                                      {user? <ColPlayer key={user.id} points={user.point} classement={findPos()} 
                                      pseudo={user.pseudo}  />:false}
                                     </tbody>
                                     <thead>
                                         <tr>
                                             <th>Pseudo</th>
                                             <th>Points</th>
                                             <th>Classement</th>
                                         </tr>
                                     </thead>
                                     <tbody> 
                                         {players?players.map(e => <ColPlayer key={e._id} points={e.point} pseudo={e.pseudo} classement={players.indexOf(e)+1} /> ):false}
                                     </tbody>

                                 </table>

                             </div>
                         </div>
            </>
    )
}
export default Rating