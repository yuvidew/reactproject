import React from "react";
import "./index.css"

const Btn = (prop) => {
    return(
        <>
            <button id={prop.id}><i className={prop.isrc}></i></button>
        </>
    )
}

export default Btn