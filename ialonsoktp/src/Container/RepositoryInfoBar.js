

import React from 'react';
import './RepoInfoBar.css';

const repositoryinfobar=(props)=>{

    return (<div className="repositoryInfoBar">
        <div>
            <span className="title">
                organisations 
            </span>
            <span className="sumData">
                {props.globalData.numberOrgs}
            </span>
        </div>
        <div>
            <span className="title">
                repositories 
            </span>
            <span className="sumData" >
                {props.globalData.numberRepos}
            </span>
        </div>
        <div>
            <span className="title">
                Repository Info 
            </span>
        </div>
    </div>)
}


export default repositoryinfobar;


