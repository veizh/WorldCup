import React, { useContext,  useEffect,  useState } from "react"
import { createContext } from "react"
import Selectbox from "../select/_Select"
import './pariElim.css'
import { server } from '../../utils/servers';
import { addHeaderJWT } from "../../utils/header";


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
        
        
        
        const selected = document.querySelectorAll(".selected")
        const a =selected[0].innerHTML
        const b =selected[1].innerHTML
        const pari ={
            "idMatch":clickedMatch[0].id,
            "result_a":a,
            "result_b":b

        }    
        console.log(pari)
        const headers = addHeaderJWT()
        headers.append("Content-Type","application/json")
        fetch(server + "/paris/post?poule=elim",{
            
            method:"put",
            headers:headers,
            body:JSON.stringify(pari)
        })
        .then(res=>res.json())
            
        
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
                            <div className="container-caution" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/></svg>
                                <div className="txt">ATTENTION :<br /> Ici vous devez pronostiquer la position des équipes a un certain stade de la compétition et non sur le vainqueur des matchs !</div>
                                <svg className="second"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/></svg>
                        
                            </div>
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