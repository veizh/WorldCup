import React,{ useState }  from'react'
import { useEffect } from 'react'
import { server } from '../../utils/servers'
import "./select.css" 

const Selectbox = (props) =>{
        const [activeselection,setActiveSelection] = useState(props.placeholder)
        const [active,setActive] = useState(false)
        const [settings,setSettings] = useState(undefined)

        const getSettings =async () => {
            const poule = props.option
            //console.log(poule);
            await fetch(server +"/equipe/getTeamGroup", {
                     method:"post",
                     headers:{"Content-Type":"application/json"},
                     body:JSON.stringify({poule})
                    })
                .then(res=>res.json())
                .then(res => setSettings(res))
            
        }
        //console.log(settings);
        if(settings===undefined){
            getSettings()
        }
    
        const toggleActive = ()=>{
            if(active){
                setActive(false)
            }
            else setActive(true)
        }

        const labelSelected = (e) =>{
            setActive(false)
             setActiveSelection(e);
        }



         /* Recuperer les equipes probable de selectionner a l'endroit x et l'instant t */ 

    return (
            <div className="containerSelect">
                <div className={ active?'selected active':'selected'} onClick={toggleActive} >{activeselection}</div>   

                <div className="select-box">
                    <div className={ active?'options-container active':'options-container'}>
                        {settings?settings.map(e=><div key={e.equipe} onClick={()=>{labelSelected(e.equipe)}} className="option" id={e.equipe}>
                            <input type="radio" className="radio" name={e.equipe} id={e.equipe}/>
                             <label htmlFor={e.equipe}>{e.equipe}</label>  </div>):false}
                        
                    </div>
                </div> 
                   
            </div>
            )
}

export default Selectbox