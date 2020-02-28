

import React from 'react';

import ListOrganizations from '../Organisations/ListOrganisations';
import ListRepositories from '../Repos/ListRepositories';
import RepoInfo from '../RepoInfo/RepoInfo';
import './BoxHolder.css';


const boxholder= (props) =>{

    return (
        <div className="boxHolder">
            <ListOrganizations organisations={props.organisations}/>
            <ListRepositories repositories={props.repositories}/>
            <RepoInfo empty="true"/>
        </div>
    )
}

export default boxholder;