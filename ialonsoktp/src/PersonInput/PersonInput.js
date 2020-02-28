import React from 'react';
import './PersonInput.css';


const personinput=(props)=>{

    return (<div className="inputContainer">
        <input type="text" onChange={props.type}></input>
    </div>)


}

export default personinput;