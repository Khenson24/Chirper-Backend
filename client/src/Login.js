import React from "react";
import './App.css';

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form action="/" method="POST">
                <input type="text" className="email" name="email" />
                <br></br>
                <input type="text" className="password" name="password" />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login;