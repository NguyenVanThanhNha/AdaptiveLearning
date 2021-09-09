import React from 'react';
import Header from "../Components/header";
import Footer from "../Components/footer";
export default function Index(props) {
    return (
        <>
            <Header/>
             {props.children}
            <Footer/>
        </>
    )
}
