import React from "react";
import './App.css';
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="nav">
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/Feed">
                <li>Feed</li>
                </Link>
                <Link to="/Login">
                <li>Login</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;