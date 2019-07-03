import React from "react";
import './App.css';
import Chirp from "./Chirp"

function Feed (){
    return(
        <div className="App">
            <Chirp name="@Evandar" message="Interviews went well" likes="6"/>
            <Chirp name="@Kenny" message="That's cap bro" likes="400"/>
            <Chirp name="@Rich" message="Hi! I'm Rich." likes="35,000"/>
            <Chirp name="@Matt" message="Hi! I'm Matt." likes="2"/>
        </div>
    )
}

export default Feed;