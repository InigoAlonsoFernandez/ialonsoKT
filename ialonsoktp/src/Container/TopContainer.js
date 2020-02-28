

import React from 'react';
import './TopContainer.css';
import PersonProfileContainer from '../PersonProfile/PersonProfileContainer';

const topcontainer=(props)=>{

    return (<div className="topContainer">
        <PersonProfileContainer person={props.person}/>
    </div>)


}

export default topcontainer;