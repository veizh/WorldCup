import React from "react"
import { useState } from "react"
import FormInput from "../../components/inputs/_FormInput"
import "./Post.css"
import { server } from '../../utils/servers';
import { Navigate, useNavigate } from "react-router-dom";

const PostNews = () => {
    const[values, setValues] = useState({
        title:null,
        desc:""
    })  
    const Navigate = useNavigate()
    const onChange = (e) =>{
        setValues({...values,[e.target.name]:e.target.value})

    }
    const inputs = [
    {id:1,
    name:'title',
    type:'text',
    label:"Titre de l'article",
    required:true
    },
    {id:2,
    name:'desc',
    type:'textarea',
    label:"Description de l'article",
    required:true
    }
]
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        fetch(server +"/post/create",{
            method:"POST",
            headers:{'Content-Type':'application/json' },
            body:JSON.stringify(values)
        })
        .then(res => res.json({msg:"test"}))
        Navigate('/News')
        /*rediriger aprés le fetch vers news (navigate)*/ 
    }

    return(
            <div className="postArticle">
                <form>
                    {
                    <FormInput 
                        key={inputs[0].id} 
                        {...inputs[0]}
                        className={inputs[0].name +" Post"} 
                        value={values[values.name]}
                         onChange={onChange} />  
                    }
                    <div className="inputContainer">
                       <label htmlFor="inputs[1].name" className="labelForm" >Description</label>
                    <textarea name={inputs[1].name} 
                    className={inputs[1].name +" Post inputForm"} 
                    id={inputs[1].id} 
                    onChange={onChange}
                    value={values[inputs[1].name]}
                    cols="30" 
                    rows="10"></textarea>  
                    </div>
                   
                    <button onClick={handleSubmit}>post</button>
                </form>
            </div>
    )
}
export default PostNews