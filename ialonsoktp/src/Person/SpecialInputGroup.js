import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import InnerGroupSearch from './InnerGroupSearch';

const specialinputgroup=(props)=>{

    const stylePersonSearch = {
        border: "1px solid lightgrey",
        width: "100%",
        height: "30px",
        borderRadius: "4px",
        margin: "auto 0.5em"
      }; 

    const ajust={
        height: "100%"
    };

    return (
        
        <div className="">
            <InputGroup.Prepend style={ajust}>
                        <InputGroup.Text id="basic-addon1">Git</InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl
                    placeholder="GitName"
                    aria-label="GitName"
                    aria-describedby="basic-addon1"
                    style={ajust}
            />

            <InnerGroupSearch click={props.click} />
        </div>
    )

}

export default specialinputgroup;

