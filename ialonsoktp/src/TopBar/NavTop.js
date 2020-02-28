
import React, {Component} from 'react';

import './TopBar.css'
import NameComponent from './NameInfo';
import PersonInputContainer from '../PersonInput/PersonInputContainer';
import LogoCompany from './LogoCompany';

const topnavbar=(props) =>{
    
    return(
        <div className="topBar">
            <div className="logoBlock">
                <LogoCompany />
            </div>
            <div className="boxUserSearch">
                <PersonInputContainer click={props.click} type={props.type}/>
            </div>
            <div className="nameBlock">
                <NameComponent namelabel={props.userInfo} />
            </div>
        </div>
        )

}

export default topnavbar;