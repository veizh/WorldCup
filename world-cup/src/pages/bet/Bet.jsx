
import "./bet.css"
import React, { useContext,useEffect,useState  } from "react"
import {Link} from "react-router-dom"
import Header from "../../components/header/_Header"
import { addHeaderJWT } from "../../utils/header"
import { UserCtx } from "../../App"
import { server } from "../../utils/servers";

const ListBet = () =>{
    const [user] = useContext(UserCtx)
    function testPariRemplie (a){
        let tmp2 =1
        if(a){
            let tmp = Object.keys(a)
            
            tmp.forEach(r => {
                if(a[r]==="1"){
                    tmp2 = 2
                }
            })
            if(tmp2===2){
                return ""
            }
            else return "done"
        }

        else  return ""
    }   
    
    return (<>
                <div className="bgBet"></div>
                <div className="grid">
                    <div className="subtitle">FAITES VOS JEUX !</div>
                    <div className="subtitle2"><div className="txt">“ L'imprévu n'est pas l'impossible, c'est une carte qui est toujours dans le jeu. ”</div></div>
                    <Link className={user&&user.pari_a!==null?testPariRemplie(user.pari_a):""} to="./poule/a">Poule A <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_b!==null?testPariRemplie(user.pari_b):""} to="./poule/b">Poule B <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_c!==null?testPariRemplie(user.pari_c):""} to="./poule/c">Poule C <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_d!==null?testPariRemplie(user.pari_d):""} to="./poule/d">Poule D <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_e!==null?testPariRemplie(user.pari_e):""} to="./poule/e">Poule E <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_f!==null?testPariRemplie(user.pari_f):""} to="./poule/f">Poule F <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_g!==null?testPariRemplie(user.pari_g):""} to="./poule/g">Poule G <i className="fa-solid fa-circle-check"></i></Link>
                    <Link className={user&&user.pari_h!==null?testPariRemplie(user.pari_h):""} to="./poule/h">Poule H <i className="fa-solid fa-circle-check"></i></Link>
                    <Link  className={user&&user.pari_elim.length===15?"done":""} to="./eliminatoire">Eliminatoires <i className="fa-solid fa-circle-check"></i></Link>
                    <Link  className={user&&user.pari_vainqueurs!==null?"done":""}  to="./Vainqueurs">Vainqueurs <i className="fa-solid fa-circle-check"></i></Link>

                    <Link className={user&&user.pari_bonus!==null?"done":""} to="./bonus">Questions subsidiaires <i className="fa-solid fa-circle-check"></i></Link>
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

