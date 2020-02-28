

import React from 'react';
import './RepoInfo.css';

import DataRepoList from './RepoInfoData';
import EmptyData from '../EmptyData/EmptyData';

const repoInfoContainer=(props)=>{

    if(props.empty){

        return (
            <div className="emptyContainer">
                <EmptyData />
            </div>
        )
    }else{

    return (
        <div className="repoInfoContainer">
            <DataRepoList name="inigo" url="https:google.com"/>
        </div>
    )

    }

}

export default repoInfoContainer;