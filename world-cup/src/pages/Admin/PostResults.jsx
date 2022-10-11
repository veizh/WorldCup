import React from "react"
import { useState } from "react"
import FormInput from "../../components/inputs/_FormInput"
import "./Post.css"


const PostResults =()=> {
    const[values, setValues] = useState({
    idMatch:null,
    resultat:null
    
})  
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
}
const onChange = (e) =>{
    setValues({...values,[e.target.name]:e.target.value})
    console.log(values)

}
const inputs=[
    {
        id:1,
        name:"idMatch",
        type:"text",
        required:true,
        label:"id du match"
    },
    {
        id:2,
        name:"resultat",
        type:"text",
        required:true,
        label:"resultat"
    }
]
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
export default PostResults