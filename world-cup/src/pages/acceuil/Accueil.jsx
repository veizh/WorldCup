import React from "react"
import NavButton from "../../components/_Navbutton"
import './accueil.css'

/* props ==> */
export const Header = () => {
    return(
        <>
            <NavButton name="Actualités" link="/News"/>
            <NavButton name="Classement" link="/Rating" />
            <NavButton name="Jouer" link="/Bet" />
            <NavButton name="Règles du jeu" link="/Rules" />
        </>
    )
}
const Accueil = () =>{
    return(
        <>
            <div className="backgroundHome"/>
            <div className="page">
                <div className="logo" />
                
                <div className="buttonContainer">
                    <Header className='header' />
                </div>
                <span> C'est l'heure de rentrer sur le terrain !</span>
            </div>
        </>
    )
}

export default Accueil