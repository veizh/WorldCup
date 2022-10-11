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
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Match de 1/8 et 1/4 : 2 points<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Match de 1/2 et finale :<br/>
                                 Les pronostics ne sont plus modifiables une fois la compétition commencée.
                                 <div className="subtitle">Validation des pronostics :</div>  

                                - Les pronosics de la phase de groupe sont au format : 1/N/2 (victoire équipe 1/NUL/victoire équipe 2).<br/>
                                - Les pronostics de la phase éliminatoire sont au format : 1/2 (victoire équipe 1/victoire équipe 2).<br/>
                                - Les pronostics sont modifiables jusqu'à la date butoir du :
                                <div className="subtitle">Bonus :</div> 
                                - Après la saisie de tous vos pronostics classiques allant du premier match à la finale, vous aurez à
                                disposition 5 bonus "double-chance" et 5 bonus "compte double" à placer.<br/>
                                - Le bonus "double-chance" : permet de choisir pour un match deux issues possibles, à savoir la victoire
                                d'une équipe ou le match nul, n'est applicable qu'en match de poule.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exemple : dans un match comme Espagne-Allemagne, si vous voyez l'Espagne l'emporter mais êtes
                                incertain, si vous placez le bonus vous gagnerez le point même en cas d'égalité.<br/>
                                - Le bonus "compte double" : double le nombre de point que vous gagnez si le pronostic est validé,
                                applicable sur tous les matchs de la compétition.<br/>
                                - Les bonus ne sont pas récupérables après le début de la compétion.<br/>
                                <div className="subtitle">Répartition des lots :</div> 

                                - Les lots sont répartis selon 3 phases de la compétition : le classement sur la phase de poule, le
                                classement sur la phase éliminatoire et enfin le classement général.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Lot pour le vainqueur des poules :<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Lot pour le vainqueur des éliminatoires :<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Lot pour le vainqueur général :<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Dans le cas où un participant cumul des victoires sur plusieurs phases, il ne remporte que le lot le plus
                                important (ou de son choix).
                                - Voici la liste de l'intégralité des lots :<br/>
                                <div className="subtitle">Cas d'égalité dans le classement :</div> 
                                - Les participants éligibles à un lot ayant le même nombre de points à la fin de la compétition sont
                                départagés de la manière suivante :<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Phase de poule :<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Phase éliminatoire :<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Classement global :<br/>
                                Idées : Le participant avec le plus grand nombre de bons pronostics ? Avoir trouvé le vainqueur de la
                                compétition ? Question sur le meilleur buteur ? Sur l'équipe qui marque le plus ? Question spéciale ?</div> 
                        
                    </div> 
            </>    
    )
}

export default Rules