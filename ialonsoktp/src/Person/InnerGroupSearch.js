import React from 'react';
import SearchButton from '../SearchButton/SearchButton';
import {InputGroup} from 'react-bootstrap';

const innergroupsearch=(props)=>{

    const ajust={
        height: "100%"
    }
    return (<InputGroup.Append style={ajust}  click={props.click}>
                    <SearchButton click={props.click} className="searchButton" />
        </InputGroup.Append>)

}

export default innergroupsearch;
