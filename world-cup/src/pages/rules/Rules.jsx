import React from "react"
import './rules.css'
import Header from "../../components/header/_Header"
const Rules = () => {
    return (   
            <>
                <Header></Header>
                    <div className="backgroundRules"></div>

                    <div className="rulesContainer">
                        <div className="title">Règles du jeu</div>
                            
                        <div className="rules">
                            <div className="subtitle">Règles générales :</div>  
                                - Il n'y a qu'un seul compte et une seule fiche de pronostics par personne.<br/>
                                - Les pronostics de tous les matchs sont rendus en même temps avant le match d'ouverture.<br/>
                                - Un pronostic validé équivaut un certain nombre de point{"(s)"} selon le stade de la compétition:<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Match de poule : 1 point<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matches de 1/8 et ¼ : 2 points par équipes trouvées<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matches de ½ : 2 points par équipes trouvées<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matches de la finale : 2 points par équipes trouvées<br/>
                                 - Les pronostics ne sont plus modifiables une fois la compétition commencée.
                                 <div className="subtitle">Validation des pronostics :</div>  

                                - Les pronosics de la phase de groupe sont au format : 1/N/2 (victoire équipe 1 / NUL / victoire équipe 2).<br/>
                                - Phase éliminatoire, on recherche les équipes qui se qualifieront: <br/>
                                <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Si l'affiche du match est Espagne/Qatar 
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Et que vous avez mis Angleterre/Qatar vous recevrez 1*2points 
                                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mais si vous avez mis Espagne/Qatar vous recevrez 2*2points.<br/><br/>
                                - Les pronostics sont modifiables jusqu'à la date butoir du : Le 18 Novembre 2022.
                                <div className="subtitle">Répartition des lots :</div> 

                                - Les lots sont répartis selon 3 phases de la compétition : le classement sur la phase de poule, le
                                classement sur la phase éliminatoire et enfin le classement général.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Lot pour le vainqueur des poules :<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Lot pour le vainqueur des éliminatoires :<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Lot pour le vainqueur général :<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Dans le cas où un participant cumul des victoires sur plusieurs phases, il ne remporte que le lot le plus
                                important (ou de son choix).
                                <div className="subtitle">Cas d'égalité dans le classement :</div> 
                                - Les participants éligibles à un lot ayant le même nombre de points à la fin de la compétition sont
                                départagés de la manière suivante :<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Phase de poule : Quel joueur marquera le plus de buts selon vous ?<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Phase éliminatoire : Combien de buts marqués par le meilleur joueur de la compétition ?<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Classement global : Combien de buts marqués au total dans la compétition ?<br/></div> 
                        
                    </div> 
            </>    
    )
}

export default Rules