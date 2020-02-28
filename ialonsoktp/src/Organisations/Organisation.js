import React from 'react';
import './Organisation.css';

import organisationLogo from '../images/company.svg';
const organisation = (props) =>{

    return (
        <div className="blockOrganisation">

            <div className="orgBlockImage">
                <div className="imgContainer">
                    <img src={organisationLogo} alt="organisation" />
                </div>
            </div>
            <div className="orgData">
                <span className="organisationName">{props.name}</span>
                <span className="organisationDescription">{props.description}</span>
            </div>

        </div>
    )
};

export default organisation;