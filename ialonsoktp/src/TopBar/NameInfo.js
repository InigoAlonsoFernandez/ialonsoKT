
import React from 'react';


const username = (props) =>{

    const styleName={
        color: "#fff",
        display: "block",
        width: "100%"
    };
    
    if(props.namelabel == ""){
        return (
            <span style={styleName}> Username: Github</span>
        )
    }else{
        
        return (
            <span style={styleName}> Username: {props.namelabel}</span>
        )
    }

};


export default username;