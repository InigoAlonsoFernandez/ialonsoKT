
import React, {Component} from 'react';

import './ListRepositories.css';
import Repository from './Repository';
import EmptyData from '../EmptyData/EmptyData';

const listrepositories=(props)=>{

    if(Object.entries(props.repositories).length == 0){

        return (<ul className="listRepositories">
            <EmptyData />
        </ul>)

    }else{
        return (
        <ul className="listRepositories">
            {props.repositories.map((reposit, keyRep) =>
                    <Repository key={keyRep} name={reposit.name} privacy={reposit.private} watchers={reposit.watchers}/> )
            }
        </ul>
        )
    }
    
}


export default listrepositories;

