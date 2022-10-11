
import { useState } from "react"
import "./FormInput.css"

const FormInput = (props) =>{
   
 const  {label,errorMsg,onChange,id,...inputProps}= props
 const [focused,setFocused]=useState(false)
 const handleFocus = (e)=>{
    setFocused(true)
 }

    return ( 
        <div className="inputContainer">
            <label className="labelForm">{label}:</label>
            <input className="inputForm"
             {...inputProps} 
            onChange={onChange} 
            onBlur={handleFocus} 
            focused={focused.toString()}
            onFocus={() => {inputProps.name === "confirmPassword" && setFocused(true)}}
            />
            <span className="errormsg">{errorMsg}</span>
        </div>
    )
}

export default FormInput