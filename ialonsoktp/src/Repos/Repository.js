

import React from 'react';
import RepositoryLogo from '../images/newFolder.svg';
import RepositoryViews from './RepositoryViews';
import './Repository.css';

const repository=(props)=>{

    return (

        <div className="blockRepository">
            <div className="blockLogoRepository">
                <div className="logoRepositoryContainer">
                    <img src={RepositoryLogo} alt="repository"/>
                </div>
            </div>
            <div className="blockNameRepository">
                <span>{props.name}</span>
            </div>
            <div className="blockViewsRepository">
                <RepositoryViews numberviews={props.watchers}/>
            </div>
        </div>

    )
}

export default repository;