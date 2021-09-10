import React from 'react';
import Headerlearning from "../Components/headerlearning";
export default function Index(props) {
    return (
        <>
            <Headerlearning/>
             {props.children}
        </>
    )
}
