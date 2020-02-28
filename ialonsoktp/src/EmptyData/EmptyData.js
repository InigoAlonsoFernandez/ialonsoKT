

import React from 'react';
import './EmptyData.css';


const emptydata=()=>{

    return (
        <div className="emptyDataContainer">
            <div className="emptyTop">
                <div className="emptyDataImg">

                </div>
            </div>
            <div className="emptyBottom">
                <span>No data Available to show</span>
            </div>
        </div>
    )
}

export default emptydata;