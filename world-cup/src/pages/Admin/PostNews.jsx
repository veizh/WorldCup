import React from "react"
import { useState } from "react"
import FormInput from "../../components/inputs/_FormInput"
import "./Post.css"
import { server } from '../../utils/servers';


const PostNews = () => {
    const[values, setValues] = useState({
        title:null,
        desc:null
    })  
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

        /*rediriger aprés le fetch vers news (navigate)*/ 
    }

    return(
            <div className="postArticle">
                <form>
                    {inputs.map((input) => (
                    <FormInput 
                        key={input.id} 
                        {...input} 
                        value={values[values.name]}
                         onChange={onChange} />  
                    ))}
                    <button onClick={handleSubmit}>post</button>
                </form>
            </div>
    )
}
export default PostNews