


import React from 'react';
import './PersonProfile.css';

import PersonAvatar from './PersonAvatar';
import PersonMainData from './PersonMainData';
import PersonDescriptionInfo from './PersonDescriptionInfo';
import LogoAvatar from '../images/github.png';

const containerprofile = (props) =>{
    return(
        <div className="profileContainer">
            <div className="profileTop">
                <PersonAvatar avatar_url={LogoAvatar}/>
                <PersonMainData person={props.person}/>
            </div>
            <div className="profileBottom">
                <PersonDescriptionInfo person={props.person} />
            </div>
        </div>
    )
}

export default containerprofile;

