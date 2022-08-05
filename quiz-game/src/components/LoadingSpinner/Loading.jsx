import React from "react";
import "./spinner.css";

function Loading({message}) {
    return (
        <div className="spinner-container">
            <h1 className="loadingMessage">{message}</h1>
            <div className="loading-spinner"> </div>
        </div>
    );
}

export default Loading;
