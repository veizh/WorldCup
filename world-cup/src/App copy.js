import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import './App.css';
import { server } from "./utils/servers";
/*import FormInput from './components/inputs/_FormInput';*/
export const  UserCtx = createContext()
              UserCtx.displayName="userCtx"

function App({children}) {
 
  const [Statut, setStatut] = useState(null)
  

 /*useEffect(()=>{
  if(localStorage.getItem('jwt') && !Statut){
    const ok = false
    if(ok){setStatut(true) }
    if(!ok){
      setStatut(false)
      Navigate('/login')
    }
  }
 },[Statut])*/
 const Navigate = useNavigate()

if(localStorage.getItem('JWT') && !Statut){
const headers = new Headers()
headers.append('authorization','bearer ' +localStorage.getItem('JWT'))
  fetch(server+'/users/auth',{ headers:headers})
  .then(res=> {
    if(res.ok) return setStatut(localStorage.getItem("JWT"))
    localStorage.clear()
  })
  /*
  const ok = false
  if(ok){setStatut(true) }
  if(!ok){
    setStatut(false)
    Navigate('/login')
  }*/
}
useEffect( async () => {
  const pathName=window.location.pathname.toLowerCase()
  
  if(localStorage.getItem('JWT') && Statut){
    if(pathName==='/login' || pathName==='/' || pathName==='/signin') {
      Navigate('/home')
      console.log("test");
    }
  }
  else{
    if(pathName!=='/login' || pathName!=='/' || pathName!=='/signin') {
    console.log("test2");
    Navigate('/')
    }
  }
},[Statut])


  return  <UserCtx.Provider value={[Statut,setStatut]}>
            {children}
          </UserCtx.Provider >
 /* useEffect(()=>{  
   
      if(Statut === null){
        if(localStorage.getItem('jwt')){
          console.log('fetch jwt')
          setStatut(true)
        }
      }*/
      
 /* const path = Statut?"/Acceuil":"/LogIn"
  navigate(path)
  })*/
}

export default App;
