import React from "react";
import Header from "./Home/Header";
import BookHome from "./Home/BookHome";
import Emailsection from "./Home/Emailsection";
import Explorindia from "./Home/Explorindia";
import Footersect from "./Home/Footersect";
import Propertistype from "./Home/Propertistype";
import Tripplanner from "./Home/Tripplanner";

const Home = () =>{
    return(<>
        <div className="blue">
            <div className="container">
                    <Header></Header>
                <div>
                    <BookHome></BookHome>
                    <Explorindia></Explorindia>
                    <Tripplanner></Tripplanner>
                    <Propertistype></Propertistype>
                    <Footersect></Footersect>
                </div>
            </div>
            <Emailsection></Emailsection>
            <div className="creatername">
            <p>Created By <span> Mr. yuvi dew... </span> | All Right Reserved!</p>
            </div>
        </div>
    </>)
}

export default Home