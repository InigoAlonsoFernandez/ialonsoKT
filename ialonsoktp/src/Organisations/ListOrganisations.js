import React, { Component } from 'react';

import './ListOrganisations.css';

import Organisation from './Organisation';
import EmptyData from '../EmptyData/EmptyData';


const listorganisations=(props)=>{

    if(Object.entries(props.organisations).length == 0){

        return (
            <ul className="listOrganisations">
                <EmptyData />
            </ul>)
    }else{
        return (
            <ul className="listOrganisations">
                {props.organisations.map((org, keyOrg) =>
                    <Organisation key={keyOrg} name={org.login} description={org.description}/> )
                }
            </ul>
        )
    }
    
};

export default listorganisations;