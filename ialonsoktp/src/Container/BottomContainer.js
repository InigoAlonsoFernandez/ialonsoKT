


import React from 'react';
import './BottomContainer.css';

import RepositoryInfoBar from './RepositoryInfoBar';
import BoxHolder from './BoxHolder';

const bottomcontainer=(props)=>{

    const objData={  
            numberOrgs: Object.entries(props.organisations).length,
            numberRepos: Object.entries(props.repositories).length
        };  


    return (<div className="bottomContainer">
        <RepositoryInfoBar globalData={objData} />
        <BoxHolder organisations={props.organisations} repositories={props.repositories}/>
    </div>)

}

export default bottomcontainer;