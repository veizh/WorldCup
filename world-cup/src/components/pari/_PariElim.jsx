import React, { useContext,  useEffect,  useState } from "react"
import { createContext } from "react"
import Selectbox from "../select/_Select"
import './pariElim.css'
import { server } from '../../utils/servers';


const WindowPari = (props) =>{

    const clickedMatch =useContext(ClickedMatchCtx)
    const [ctx,updateCtx] = useContext(MatchCtx)

    const [valider,setValider]=useState(false)
    const [Active,setActive] = useState(false)

    
 /*   const toggleActive =()=>{
        if(Active){
            setActive(false)}
        else setActive(true)
    }
    
    const togglevalider =()=>{
        if(!valider){
            setValider(true)}
    }
    
    const getInfo=()=>{
        const array = document.querySelectorAll('.selected')
        array.forEach((e)=>{
            console.log(e.innerHTML)
        })
    }*/
    const RemonterComp = () =>{
        clickedMatch[1](props)
        updateCtx(true)
    }
   
    return( 
            <>
                <div className="match" onClick={RemonterComp}><span>Match {props.id}</span>
                <i className={`fa-solid fa-${valider?'circle-check':'chevron-right'}`}></i>
                </div>


        {/*Active?
            <div className="containerPairing active">
                    <div className="filtre" >
                        <div className="boxMatch">
                        <Selectbox name="8.1" placeholder="1er de la poule A"/>
                        <Selectbox name="8.2" placeholder="2eme de la poule B"/>
                        <button onClick={()=>{
                        toggleActive()
                        togglevalider()
                        getInfo()
                        }}>Valider</button>
                        </div>
                    </div>
                </div>
        :false*/}
                
             </>
    )
}
const Huitieme = () => {
    const matchesCtx = useContext(AllMatchesCtx)

    if(matchesCtx[0]!==null){
        const arrayHuitieme = matchesCtx[0].filter(e=>e.phase==="huitieme")
        return(
            <div className="containerElim huitieme">
                <div className="title">Huitième de Finale</div>
                    {arrayHuitieme.map(e=> <WindowPari key={e.id} id={e.id} {...e} />)}
            </div>
        )
    
    }

    return(
        <div className="containerElim huitieme">
            <div className="title">Huitième de Finale</div>
                
        </div>
    )

}
const Quart = () => {
    
    const matchesCtx = useContext(AllMatchesCtx)

    if(matchesCtx[0]!==null){
        const arrayHuitieme = matchesCtx[0].filter(e=>e.phase==="quart")
        return(
            <div className="containerElim Quart">
                <div className="title">Quart de Finale</div>
                    {arrayHuitieme.map(e=> <WindowPari key={e.id} id={e.id} {...e} />)}
            </div>
        )
    
    }

    return(
        <div className="containerElim Quart">
            <div className="title">Quart de Finale</div>
                
        </div>
    )
}
const Demi = () => {
    const matchesCtx = useContext(AllMatchesCtx)

    if(matchesCtx[0]!==null){
        const arrayHuitieme = matchesCtx[0].filter(e=>e.phase==="demi")
        return(
            <div className="containerElim demi">
                <div className="title">Demi-Finale</div>
                    {arrayHuitieme.map(e=> <WindowPari key={e.id} id={e.id} {...e} />)}
            </div>
        )
    
    }

    return(
        <div className="containerElim demi">
            <div className="title">Demi-Finale</div>
                
        </div>
    )
   
}
const Finale = () => {
    const matchesCtx = useContext(AllMatchesCtx)

    if(matchesCtx[0]!==null){
        const arrayHuitieme = matchesCtx[0].filter(e=>e.phase==="finale")
        return(
            <div className="containerElim Finale">
                <div className="title">Finale</div>
                    {arrayHuitieme.map(e=> <WindowPari key={e.id} id={e.id} {...e} />)}
            </div>
        )
    
    }

    return(
        <div className="containerElim Finale">
            <div className="title">Finale</div>
                
        </div>
    )
}
const Modal =({children}) =>{
    return(
        <>
            <div className="filtre">
                {children}
            </div>
        </>
    )
}
const ClickedMatchCtx = createContext(null)
ClickedMatchCtx.displayName = "clickedMatch"

const BetChoice = ()=>{
    const [ctx,updateCtx] = useContext(MatchCtx)
    const clickedMatch =useContext(ClickedMatchCtx)
    
    function validerPari (e){
        
        const pari ={}
        
        const selected = document.querySelectorAll(".selected")
        const a =selected[0].innerHTML
        const b =selected[1].innerHTML     
        pari[clickedMatch[0].id]=a+"/"+b
        console.log(pari);
        updateCtx(false)
    }
   
    
    return (
        <Modal>
            <div className="containerPairing active">
                <div className="filtre" >
                    <div className="boxMatch">
                        <Selectbox name={clickedMatch[0].id} placeholder={clickedMatch[0].placeholder_a} option={clickedMatch[0].option_a}/>
                        <Selectbox name={clickedMatch[0].id} placeholder={clickedMatch[0].placeholder_b} option={clickedMatch[0].option_b}/>
                    <button onClick={validerPari}>Valider</button>
                    </div>
                </div>
            </div> 
        </Modal >
    ) 
}


export const AllMatchesCtx = createContext(null)
AllMatchesCtx.displayName = "Matches"

const MatchCtx = createContext(null)
MatchCtx.displayName = "IdMatch"


const PariElim = () =>{
    const [Matches,SetMatches] =useState(useContext(AllMatchesCtx))
    const [MatchId,SetEquipes] =useState(useContext(MatchCtx))
    const [ClickedMatch,SetClickedMatch] =useState(useContext(ClickedMatchCtx))
    if(Matches===null){
        fetch(server + "/match/get", {
        method:"get",
        headers:{"Content-Type":"application/json"}
    })
        .then(res => res.json())
        .then(res => SetMatches(res) )
    }
   
   
    return(
        <AllMatchesCtx.Provider value={[Matches,SetMatches]}>
            <MatchCtx.Provider value={[MatchId,SetEquipes]}>
                <ClickedMatchCtx.Provider value={[ClickedMatch,SetClickedMatch]}>
                    <div className="bgBet"></div>
                        {MatchId?<BetChoice  />
                        :false}
                        <div className="col">
                            <Huitieme />
                            <Quart />
                            <Demi />
                            <Finale  />
                    </div>
                </ClickedMatchCtx.Provider>
            </MatchCtx.Provider>
        </AllMatchesCtx.Provider >
    )
}



export default PariElim