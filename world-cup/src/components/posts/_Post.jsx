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
   const date =new Date(props.date/1000).toLocaleDateString("fr")
 
    return   <div className={`post ${Ar?"open":""}`}  >
                    
                        <h2 className="title">{props.title}</h2>
                        <div className="msg"><p className="paragraphe" dangerouslySetInnerHTML={{__html:props.desc}}></p></div>
                    <div className="date">{date}</div>
                    {<button className="suite" 
                    
                    onClick={()=>setAr(!Ar)}>
                    Lire la suite
                    </button>}
                </div>
}
export default Post