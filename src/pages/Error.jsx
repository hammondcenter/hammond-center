import React from "react";
import NavBar from "../components/NavBar";

function ErrorPage(){
    return (
        <>
            <NavBar />
            <h1>Oops!</h1>
            <p>Could not find this page!</p>
        </>
    );
}

export default ErrorPage;