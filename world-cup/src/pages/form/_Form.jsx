import FormInput from '../../components/inputs/_FormInput'
import './form.css'
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react';
import { server } from '../../utils/servers';
import { UserCtx } from '../../App';
import { useContext } from 'react';


const SignIn = ({handleSubmit}) => {
    
    const[values, setValues] = useState({
        email:'',
        pseudo:'',
        societe:'',
        password:'',
        confirmPassword:''
    })
    const inputs=[
        {
        id:1,
        name:'email',
        type:'email',
        errorMsg:"le format n'est pas valide !",
        label:'Email',
        required:true
            },
        {
        id:2,
        name:'pseudo',
        type:'text',
        errorMsg:'Le pseudo doit faire entre 5 et 12 caractères et ne doit pas contenir de caractère spécial !',
        pattern:'^[a-zA-Z0-9]{5,12}$',
        label:'Pseudo',
        required:true  
            },
        {
        id:3,
        name:'societe',
        type:'text',
        errorMsg:'',
        pattern:'',
        label:'Société',
        required:true   
            },
        {
        id:4,
        name:'password',
        type:'password',
        errorMsg:'Le mot de passe doit contenir au minimum 6 caractères dont un chiffre !',
        pattern:'^(?=.*[A-Za-z])(?=.*[0-9]).{6,}$',
        label:'Mot de Passe',
        required:true   
            },
        {
        id:5,
        name:'confirmPassword',
        type:'password',
        errorMsg:'les mots de passe ne correspondent pas !',
        pattern:values.password,
        label:'Confirmation MDP',
        required:true
        }
]

const onChange = (e) =>{
    setValues({...values,[e.target.name]:e.target.value})
}

    return(<>
        <div className='formBox'>
             {inputs.map((input) => (
               <FormInput 
                    key={input.id} 
                    {...input} 
                    value={values[values.name]}
                     onChange={onChange} />  
            ))}
        </div>
        <div className='space-between submitContainer'>
            <Link to="/LogIn"><span>Déjà inscris ?<br />Connectez-vous !</span></Link> 
            <button className='fa-solid fa-circle-right' onClick={(e) =>{handleSubmit(e,values)}}></button>
        </div>
        
        </>
    )
}


const LogIn = ({handleSubmit}) => {
    
    
    const [values, setValues] = useState({
        email:"",
        password:""
    })

    const inputs=[
        {
        id:1,
        name:'email',
        type:'email',
        errorMsg:"Aucun compte a cette adresse email !",
        label:'Email',
        required:true   
            },
        {
        id:2,
        name:'password',
        type:'password',
        errorMsg:'Le mot de passe ne correspond pas !',
        label:'Mot de Passe',
        required:true  
            }
     
]

const onChange = (e) =>{
    setValues({...values,[e.target.name]:e.target.value})
}
    return(<>
            <div className='formBox'>
                 {inputs.map((input) => (
                   <FormInput 
                        key={input.id} 
                        {...input} 
                        value={values[values.name]}
                         onChange={onChange} />  
                ))}
            </div>
            <div className='space-between submitContainer'>
            <Link  to="/SignIn"><span>Pas de compte ?<br />Inscrivez-vous !</span></Link> 
                <button className='fa-solid fa-circle-right' onClick={(e) =>{handleSubmit(e,values)}}></button>
            </div>
        
        </>
    )
}
const Form = ({signIn,logIn}) =>{
    const Usercontext = useContext(UserCtx)
    const Navigate = useNavigate()
    const handleSubmit = (e,values) => {
        e.preventDefault(e)
        if(document.querySelector(".errormsg").style.display!==''){
            return alert(document.querySelector(".errormsg").textContent)
        }
        const action = window.location.pathname==="/"?"/LogIn":window.location.pathname


        fetch(server+"/users"+action,{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(values)})
            .then(async res=>{
                if(!res.ok) {
                    let response;
                    const result = await res.json()
                    
                    if(res.status === 401){
                        alert("champs invalide !")
                        
                    }
                    if(res.status === 400){
                        response = result.errEmpty || result.errMailUnauthorized || result.errors
                        
                    }
                    alert(response)
                }
                else{

                const {jwt} = await res.json()
                
                localStorage.setItem("JWT",jwt)
                Usercontext[1](jwt)
                Navigate("/home")

                }
                
                
            })
           
    
    }
    return (
            <div className="container-form-bg">
                <div className='background'></div>
                    <form  >
                        <div className='subtitle'> Ne restez pas sur le banc ! <br/><br/> Participez à la coupe du monde avec <div className='oranged'>AG-constulting !</div></div>
                        <div className='title'>{logIn?'Connexion':'Inscription'}</div>
                        {logIn?<LogIn handleSubmit={handleSubmit} />:<SignIn handleSubmit={handleSubmit} />}   
                        
                    </form>
            </div>
    )
}
export default Form