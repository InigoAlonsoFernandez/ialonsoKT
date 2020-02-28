

import React from 'react';
import './PersonProfile.css';

const persondescription=(props)=>{

    return (<div className="personDescription">
        <span>Bio:</span>
        <p>{props.person.bio}</p>
    </div>)
}


export default persondescription;