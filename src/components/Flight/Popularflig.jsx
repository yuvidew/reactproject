import React, { useState } from "react";

const Popularflig = () =>{

    const [showhide, setshowhide] = useState(0);

    const chnageaction = (index) =>{
        setshowhide(index)
    }

    const tbnslist = [
        {text : "International",},
        {text : "Domestic",},
    ]

    const internatinallist = [
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=", heading : "Raiput to Dubai", text : "Sep 25 - Oct 2 Round trip"},
    ]

    const domesticlist = [
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/684542.jpg?k=355729edb3038d43ad8d7d8b0fc778dd7f23778660260577598e38ea613dffec&o=", heading : "Bhubaneshwar", text : "Sep 22 - Sep29 Round trip"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/684652.jpg?k=5055a718205497d78d7d80b05c6cfbd59b79af5998231e50c23832e103087691&o=", heading : "Hyderabad", text : "Sep 21 - Sep28 Round trip"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/684757.jpg?k=5cd52ccbba6806c371689dab0da9678a5c1f4dcef697ea976a000f5e53ac4f18&o=", heading : "Panaji", text : "Sep 23 - Sep30 Round trip"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/684533.jpg?k=efaef4796fa555481ddabf686c3fc66433b50ba69c936d6f702b1125b1d06748&o=", heading : "Bangalore", text : "Sep 20 - Sep37 Round trip"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/684511.jpg?k=4ee759f0ea5c88e018f4e67af90dedaae2e34313d84b228b841bb2c8f3741875&o=", heading : "Ahmedabad", text : "Sep 20 - Sep37 Round trip"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/684727.jpg?k=a6fd59b0c31df52ae2a907dcf2441c7842bb56e2e68d89bffd2398024c0812d3&o=", heading : "Chennai", text : "Sep 20 - Sep37 Round trip"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/684609.jpg?k=de901a22e71ac4ff09fc26c1d5b8d3a0e5fc71a8adab9d6dd99dea84054d1381&o=", heading : "Dehradun", text : "Sep 20 - Sep37 Round trip"},
    ]

    return(<>
        <section className="Popularfingbox">
            <h1>Popular flights near you</h1>
            <p>Find deals on domestic and international flights</p>
            <div className="flightcintry">
                <div className="btnbox">
                    {tbnslist.map((ele, index) =>{
                        return(<button key={index} onClick={() => {chnageaction(index)}} className={index === showhide ? "btncol" : " "}>{ele.text}</button>)
                    })}
                    <span className="thebtnline" style={{transform : `translatex(${showhide*90}%)`}}></span>
                </div>
                <div className="line"></div>
                <div className="internatinalCon" style={{display : showhide === 0 ? "grid" : "none"}}>
                    <div className="internatinalBox row" style={{display : "flex"}}>
                        {internatinallist.map((ele, index) =>{
                            return(
                            <div key={index} className="col-lg-3 col-sm-4 col-5">
                                <div className="box" >
                                    <div className="imgbox">
                                        <img src={ele.imgsrc} alt="" />
                                    </div>
                                    <div className="textbox mt-2">
                                        <h1>{ele.heading}</h1>
                                        <p>{ele.text}</p>
                                    </div>
                                </div>    
                            </div>)
                        })}
                    </div>
                </div>
                <div className="domesticcon" style={{display : showhide === 1 ? "flex" : "none"}}>
                    <div className="domesticbox"  style={{display : "flex"}}>
                    {domesticlist.map((ele, index) =>{
                            return(
                            <div key={index} className="boxdomis">
                                <div className="box" >
                                    <div className="imgbox">
                                        <img src={ele.imgsrc} alt="" />
                                    </div>
                                    <div className="textbox mt-2">
                                        <h1>{ele.heading}</h1>
                                        <p>{ele.text}</p>
                                    </div>
                                </div>    
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Popularflig