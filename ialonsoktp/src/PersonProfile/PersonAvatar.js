

import React from 'react';
import './PersonProfile.css';

const personavatar=(props)=>{

    if(props.avatar_url === "" || props.avatar_url === null){
        return (<div className="avatarImageContainer">
            <img src={props.avatar_url} alt="unknown" />
        </div>)
    }else{
        return (<div className="avatarImageContainer">
            <img src={props.avatar_url} alt="avatar" />
        </div>)
    }

}

export default personavatar;