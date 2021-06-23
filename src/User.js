import React from "react";
import { useHistory } from "react-router-dom";

export default function User(props) {

    const history = useHistory();

    return (
        <>
            <h1>
                User
            </h1>

            <button onClick={()=>{history.push('/')}}>
                Back
            </button>

            {props.li}
            {props.list}
        </>
    )
};