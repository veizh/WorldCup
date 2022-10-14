import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createContext } from "react";
import "./App.css";
import { server } from "./utils/servers";
import { addHeaderJWT } from "./utils/header";
/*import FormInput from './components/inputs/_FormInput';*/
export const UserCtx = createContext();
UserCtx.displayName = "userCtx";

function App({ children }) {
  const [Statut, setStatut] = useState(null);

 
  const Navigate = useNavigate();



  useEffect( () => {
    const pathName = window.location.pathname.toLowerCase();
    if (localStorage.getItem("JWT")) {
      
      fetch(server + "/users/auth", { headers: addHeaderJWT() }).then(async (res) => {
        if (res.ok) {
          setStatut(await res.json())
          if ( pathName === "/login" || pathName === "/" || pathName === "/signin"   ) {
            Navigate("/home");
          }
        } else {
          localStorage.clear();
        }
      });
    } else {
      
      if ( pathName === "/login" || pathName === "/" || pathName === "/signin") {
        return
      }
      else Navigate("/")
      }
  }, [window.location.pathname]);

  return (
    <UserCtx.Provider value={[Statut, setStatut]}>{children}</UserCtx.Provider>
  );
}

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

export default App;
