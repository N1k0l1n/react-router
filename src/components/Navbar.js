import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className="ui very raised padded segment">

          
                <button className="ui button"><Link to="/">Home</Link></button>
                <button className="ui button"><Link to="/about">About</Link></button>
                <button className="ui button"><Link to="/contact">Contact</Link></button>
          

        </nav>
    )
} 
export default Navbar;