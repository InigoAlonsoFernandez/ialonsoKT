
import React from 'react';
import './PersonProfile.css';


const personmaindata=(props)=>{

    return (<div className="userMainDataContainer">
        <ul className="userMainData">
            <li>
                <span className="infoText">
                    Followers:
                </span>
                <span className="data">
                    {props.person.followers}
                </span>
            </li>
            <li>
                <span className="infoText">
                    Following:
                </span>
                <span className="data">
                    {props.person.following}
                </span>
            </li>
            <li>
                <span className="infoText">
                    Created At:
                </span>
                <span className="data">
                    {props.person.created_at}
                </span>
            </li>
            <li>
                <span className="infoText">
                    Updated At:
                </span>
                <span className="data">
                    {props.person.updated_at}
                </span>
            </li>
        </ul>
    </div>)
}


export default personmaindata;