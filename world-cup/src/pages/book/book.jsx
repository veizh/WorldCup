import './book.css'
import { useContext } from "react";
import { UserCtx } from "../../App"
import { useState } from 'react';
import { server } from '../../utils/servers';
const PostMessage = ()=>{
    const [user] = useContext(UserCtx)

    const handleSubmit = () => {
        const comment = {
            pseudo:user.pseudo,
            content:document.querySelector('textarea').value
        }
        console.log(comment)
        fetch(server +"/comments/create",{
            method:"POST",
            headers:{'Content-Type':'application/json' },
            body:JSON.stringify(comment)
        })
        .then(res => res.json({msg:"ok"}))
        /*rediriger aprés le fetch vers news (navigate)*/ 
    }

   

    return (
        <div className="containerInput">
            <label htmlFor="comment">Laissez un message sur votre expérience de cette coupe du monde avec AG-consulting !</label>
            <textarea htmlFor="comment"></textarea>
            <button onClick={handleSubmit}>Envoyer</button>
        </div>
    )
}

const Article = (props)=>{

    return (
        <>
            <div className="containerArticle">
                <div className="content" dangerouslySetInnerHTML={{__html:props.content}}></div>
                <div className="pseudo">{props.pseudo}</div>
            </div>
        </>
        
    )
}


const Book = ()=>{
    const [user] = useContext(UserCtx)
    
    const [articles,setArticles]=useState(undefined)

    if(articles===undefined){
         fetch(server + "/comments/getComments", {
        method:"get",
        headers:{"Content-Type":"application/json"}
         })
         .then(res=>res.json())
         .then(res => {
            setArticles(res)})
    }
    console.log(articles);
    
    return (<>
        <div className="backgroundNews"></div>

            <div className="containerBook">
            <h1 className='subtitlee'>Le livre d'or.</h1>
                <PostMessage />
                {articles&&articles.map((e)=><Article pseudo={e.pseudo} content={e.content} key={e.content}/>)}
            </div>
            </>
    )
}
export default Book