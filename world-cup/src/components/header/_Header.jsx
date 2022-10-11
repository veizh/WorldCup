import React from "react"
import {Link} from "react-router-dom"
import "./header.css"
const Header = () => {
    return(
        <header>
        <div className="logo"></div>
        <Link to={"/home"} ><i className="fa-solid fa-house"></i> </Link >
        
        </header >
    )
}
export default Header