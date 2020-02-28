

import React from 'react';
import ViewLogo from '../images/views.svg';

import './RepositoryViews.css';

const repositoryviews = (props) =>{

    return (
        <div className="viewImageContainer">

            <img src={ViewLogo} alt="views" />
            <span>{props.numberviews}</span>
        </div>
    )
}


export default repositoryviews;