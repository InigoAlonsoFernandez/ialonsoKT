

import React, {Component} from 'react';
import './MainInfoContainer.css';
import UserNotFound from './UserNotFound';

import TopContainer from './TopContainer';
import BottomContainer from './BottomContainer';
import SpinnerContainer from '../LoadingContents/SpinnerContainer';


const maininfocontainer=(props)=>{


    if(Object.entries(props.person).length > 0)
    {
        return (<div className="mainInfoContainer">
                    <TopContainer person={props.person} />
                    <BottomContainer organisations={props.organisations} repositories={props.repositories} />
                </div>
                );
    }else{

        return (
                <div className="mainInfoContainer">
                    <UserNotFound />
                </div>);

    }

    
}


export default maininfocontainer;