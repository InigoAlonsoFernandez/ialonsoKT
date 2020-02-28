import React from 'react';
import PersonGitSpan from './PersonGitSpan';
import PersonInput from './PersonInput';
import SearchButton from './SearchButton';
import './PersonInput.css';

const personinputcontainer=(props)=>{

    return (<div className="personInputContainer">
        <PersonGitSpan />
        <PersonInput type={props.type}/>
        <SearchButton click={props.click}/>
    </div>)

}

export default personinputcontainer;