

import React from 'react';
import './LoadingContents.css'
import SpinnerContainer from './LoadingSpinner';
const spinnercontainer=()=>{

    return (
        <div className="blockContainerSpinner">
            <SpinnerContainer />
        </div>
    )
}
export default spinnercontainer;