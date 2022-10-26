import React,{useState} from "react";
import './pariPoule.css' 



const PariPoule = (props) => {
    
    const [selected,setSelected] = useState(null)
    /*je dois fetch l'api pour recuperer tout les matchs */
    if(selected===null){
        if(props.memory){
            setSelected(props.memory);

           }
           else{
            setSelected(1)
           }
    }
     
  
    return(<>   
                
                <div className="titlePari">{props.a} VS {props.b}</div>
                <div className="containerPari" data-id={props.id} data-selected={selected} data-memory={props.memory}>
                    <div onClick={()=>{setSelected(props.a)}} className={`cell A ${selected===props.a?"selected":""}`}>{props.a}</div>
                    <div onClick={()=>{setSelected("Draw")}} className={`cell nul ${selected==="Draw" ?"selected":""}`}>nul</div>
                    <div onClick={()=>{setSelected(props.b)}} className={`cell B ${selected===props.b?"selected":""}`}>{props.b}</div>
                </div>
            </>     
    )
}

export default PariPoule