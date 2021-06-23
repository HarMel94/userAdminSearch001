import React from "react";
import { useHistory } from "react-router-dom";

export default function Admin(props) {

    const history = useHistory();
    
    return (
        <>
            <h1>
                Admin
            </h1>

            <button onClick={()=>{history.push('/')}}>
                Back
            </button>

            {props.li}
            {props.list}
        </>
    )
};