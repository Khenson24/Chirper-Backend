import React from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

function Login() {
    return (
        <Router>
        <div>
            <h1>Login</h1>
            <form action="/" method="POST">
                <input type="text" id="email" className="email" placeholder="email" />
                <br></br>
                <input type="text" id="password" className="password" placeholder="password" />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
        </Router>
    )
}

export default Login;