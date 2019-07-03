import React from 'react';



function Chirp(props){
    return(
        <div className="chirp">
        <name>{props.name}</name>
        <p>{props.message}</p>
        <h3>{props.likes}</h3>
        </div>
    )
}

export default Chirp;