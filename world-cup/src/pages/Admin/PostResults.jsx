import React from "react"
import { useState } from "react"
import FormInput from "../../components/inputs/_FormInput"
import { server } from "../../utils/servers"
import "./Post.css"

const PostResults =()=> {
    const[values, setValues] = useState({
    idMatch:null,
    result:null,
    point:null

})  

const handleSubmit =  (e) => {
    e.preventDefault()
    console.log(values)
          fetch(server +"/results/create",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(values)
        })
        .then(res => res.json({msg:"test"}))
        
        
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
        name:"result",
        type:"text",
        required:true,
        label:"resultat"
    },
    {
        id:3,
        name:"point",
        type:"number",
        required:true,
        label:"nombre de point"
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