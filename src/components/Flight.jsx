import React from "react";
import Header from "./Home/Header";
import Bookingflight from "./Flight/Bookingflight";
import Popularflig from "./Flight/Popularflig";
import Theworldflight from "./Flight/Theworldflight";
import Emailsection from "./Home/Emailsection";
const Flight = () =>{
    return(<>
        <div className="flightblue">
            <div className="container p-1">
                <Header></Header>
            </div>
        </div>
        <div className="flightcompinent">
            <div className="container p-1">
                <Bookingflight></Bookingflight>
            </div>
        </div>
        <div className="Popularconte">
            <div className="container p-1">
                <Popularflig></Popularflig>
            </div>
        </div>
        <div className="Worldwidecont p-1">
            <Theworldflight></Theworldflight>
        </div>
        <Emailsection></Emailsection>
        <div className="creatername">
            <p>Created By <span> Mr. yuvi dew... </span> | All Right Reserved!</p>
        </div>
    </>)
}

export default Flight