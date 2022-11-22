import { useState } from "react";
import { server } from "../../utils/servers"
const Stats = () =>{
    const [players,SetPlayers] = useState(undefined)
 
    const headers = new Headers();

     function getAllUsers (){
         fetch(server +"/users/get",{headers:headers})
        .then(res => res.json())
        .then(res=>{
            SetPlayers(res)
        })
        
    }
    if(players===undefined){
        getAllUsers()
    }
    console.log(players);
    return(
        <div className="stats">
            <div className="pseudos">
                {players?players.map(e=><div key={e._id}> {e.pseudo} </div>):<></>}   

            </div>
            <div className="pseudos">
                {players?players.map(e=><div key={e._id}> {e.point} </div>):<></>}   

            </div>
            <div className="emails">
                {players?players.map(e=><div key={e._id}> {e.email} </div>):<></>}   

            </div>
        </div>
    )
}
export default Stats