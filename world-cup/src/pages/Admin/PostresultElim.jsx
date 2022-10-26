import React from "react"
import { useState } from "react"
import FormInput from "../../components/inputs/_FormInput"
import { server } from "../../utils/servers"
import "./Post.css"

const PostResultElim =()=> {
    const[values, setValues] = useState({
    idMatch:null,
    result_a:null,
    result_b:null,
    point:null

})  

const handleSubmit =  (e) => {
    e.preventDefault()
    console.log(values)
          fetch(server +"/results/createElim",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(values)
        })
        alert("c'est okayyyyyyyyyyyyyy")
        
       // Navigate('/rating')
    
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
        name:"result_a",
        type:"text",
        required:true,
        label:"resultat_a"
    },
    {
        id:3,
        name:"result_b",
        type:"text",
        required:true,
        label:"resultat_b"
    },
    {
        id:4,
        name:"point",
        type:"number",
        required:true,
        label:"nombre de point par match"
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
export default PostResultElim