
import React from 'react';
import './RepoInfo.css';

import EmptyData from '../EmptyData/EmptyData';

const datarepolist=(props)=>{

    if(props.empty){

        return (
            <EmptyData />
        )
    }else{

        return (<ul className="dataList">

            <li className="dataListField">
                <span className="name">Name:</span>
                <span>{props.name}</span>
            </li>
            <li className="dataListField">
                <span className="name">Name:</span>
                <a href="https://google.com" target="_blank">google.com</a>
            </li>
        </ul>)

    }

    
    
};


export default datarepolist;

