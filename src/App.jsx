import React from "react";
import Header from "./components/Header";
import BookHome from "./components/BookHome";
import Exploreindia from "./components/Explorindia";
import Tripplanner from "./components/Tripplanner";
import Propertistype from "./components/Propertistype";
import Footersect from "./components/Footersect";
import Emailsection from "./components/Emailsection";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const App = () =>{
  return(
    <>
      <div className="blue">
        <div className="container">
              <Header></Header>
            <div>
              <BookHome></BookHome>
              <Exploreindia></Exploreindia>
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
    </>
  )
}

export default App