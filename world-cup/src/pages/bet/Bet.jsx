
import "./bet.css"
import React, { useContext,useEffect,useState  } from "react"
import {Link} from "react-router-dom"
import Header from "../../components/header/_Header"
import { addHeaderJWT } from "../../utils/header"
import { UserCtx } from "../../App"
import { server } from "../../utils/servers";

const ListBet = () =>{
    const [user] = useContext(UserCtx)
    

    return (<>
                <div className="bgBet"></div>
                <div className="grid">
                    <div className="subtitle">FAITES VOS JEUX !</div>
                    <div className="subtitle2"><div className="txt">“ L'imprévu n'est pas l'impossible, c'est une carte qui est toujours dans le jeu. ”</div></div>
                    <Link className={user&&user.pari_a!==null?"done":""} to="./poule/a">Poule A <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_b!==null?"done":""} to="./poule/b">Poule B <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_c!==null?"done":""} to="./poule/c">Poule C <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_d!==null?"done":""} to="./poule/d">Poule D <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_e!==null?"done":""} to="./poule/e">Poule E <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_f!==null?"done":""} to="./poule/f">Poule F <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_g!==null?"done":""} to="./poule/g">Poule G <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_h!==null?"done":""} to="./poule/h">Poule H <i className="fa-solid fa-circle-check"></i></Link>
                    <Link  className={user&&user.pari_elim.length===15?"done":""} to="./eliminatoire">Eliminatoires <i className="fa-solid fa-circle-check"></i></Link>
                    <Link  className={user&&user.pari_vainqueurs!==null?"done":""}  to="./Vainqueurs">Vainqueurs <i className="fa-solid fa-circle-check"></i></Link>

                    <Link className={user&&user.pari_bonus!==null?"done":""} to="./bonus">Bonus <i className="fa-solid fa-circle-check"></i></Link>
                </div>
            </>   
    )
}

const Bet = () => {
    return (
            <>
               <Header />
               <ListBet />                  
            </>
    )
}

export default Bet

/*<div className="col">
            <PariPoule a="france" b="espagne"/>
            <PariPoule a="Portugal" b="Lithuanie"/>
            <PariPoule a="suisse" b="Suede"/>
            <PariPoule a="USA" b="Angleterre"/>
           </div>*/