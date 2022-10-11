import React from "react"
import {Link} from "react-router-dom"

const NavButton = (props) =>{
    return (
            <React.Fragment>
                <Link to={props.link} className="navbtn">{props.name}</Link>
            </React.Fragment>
    )
}
export default NavButton