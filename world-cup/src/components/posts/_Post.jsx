import React from "react"
import { useState } from 'react';
const Post = (props) => {

    const [Ar,setAr] =useState(false)
    

  /*  useEffect(()=>{
        if(statut===null){
            if(props.msg.length>100){
                
            console.log('true')
            setStatut(true)
            }else(setStatut(false))
        }
    },[setStatut,statut,props.msg])*/
  /*  const open= (e)=>{
        console.log(e.closest(".post"))
    }*/
   
    return   <div className={`post ${Ar?"open":""}`}  >
                    
                        <h2 className="title">{props.title}</h2>
                        <div className="msg"><p>{props.desc}</p></div>
                    <div className="date">{props.date}</div>
                    {<button className="suite" 
                    
                    onClick={()=>setAr(!Ar)}>
                    Lire la suite
                    </button>}
                </div>
}
export default Post