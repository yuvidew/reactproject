import React, { useState } from "react";

const Bookingflight = () =>{

    const [clas, setclas] = useState("travelerbox")
    const [order, setorder] = useState("row")
    const [action, setaction] = useState("none")
    const [action2, setaction2] = useState("none")

    const showthbtn = (clname) =>{
        setclas(clname)
    }

    const changedirection = () =>{
        setorder(order === "row" ? "row-reverse" : "row")
    }

    const hideformbox = (cls) =>{
        setaction(cls  === "none" ? "none" : "block")
    }

    const hideformbox2 = (cls) =>{
        setaction2(cls  === "none" ? "none" : "block")
    }

    const childadeltlist = [
        {heading : "Adult", pera : "Age 18+", increabtn : "fa-solid fa-plus", decres :  "fa-solid fa-minus"},
        {heading : "Children", pera : "Age 0 - 17", increabtn : "fa-solid fa-plus", decres :  "fa-solid fa-minus"}
    ]

    const ageselectionlist = [
        {heading : "1st child's age" , pera : "Select the age this child will be on the date of your final flight"},
        {heading : "2st child's age" , pera : "Select the age this child will be on the date of your final flight"},
        {heading : "3st child's age" , pera : "Select the age this child will be on the date of your final flight"},
    ]
    

    return(<>
        <section className="Bokingheaging p-2">
            <h1>Compare and book flights with ease</h1>
            <p className="mb-4">Discover your next dream destination</p>
            <div className="row  ">
                <div className="col-lg-1 col-sm-4 col-12 ">
                <div className="thecheckbox">
                    <input type="radio" id="first" name="bokingcheck"/>
                    <label htmlFor="first">Round-trip</label>
                </div>
                </div>
                <div className="col-lg-1 col-sm-4 col-12 ">
                <div className="thecheckbox">
                    <input type="radio" id="second" name="bokingcheck"/>
                    <label htmlFor="second">One-way</label>
                </div>
                </div>
                <div className="col-lg-1 col-sm-4 col-12 ">
                <div className="thecheckbox">
                    <input type="radio" id="thrid" name="bokingcheck"/>
                    <label htmlFor="thrid">Multi-city</label>
                </div>
                </div>
                <div className="col-2 d-lg-block d-sm-none d-none">
                    <div className="thecheckbox">
                        <select >
                            <option >Economy</option>
                            <option >Premium economy</option>
                            <option >Busines</option>
                            <option >First-class</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-2 col-2 d-lg-block d-sm-none d-none">
                    <div className="thecheckbox thetravelor">
                        <h3 onClick={() => showthbtn("showals")}>3 tralevers <i className="fa-solid fa-angle-down"></i></h3>
                        <div className={clas === "travelerbox" ? "travelerbox" : "showals"}>
                        <button className="fromclosbtn" onClick={ () => showthbtn("travelerbox")}><i className="fa-solid fa-xmark"></i></button>
                            <div className="thebox">
                                {childadeltlist.map((ele, index) =>{
                                    return(<div key={index} className="box">
                                        <div className="leftright">
                                            <h2>{ele.heading}</h2>
                                            <p>{ele.pera}</p>
                                        </div>
                                        <div className="leftright">
                                            <div className="btnbox">
                                                <button ><i className={ele.decres}></i></button>
                                                <span>0</span>
                                                <button ><i className={ele.increabtn}></i></button>
                                            </div>
                                        </div>
                                    </div>)
                                })}

                                <div className="selectage">
                                    {ageselectionlist.map((ele, index) =>{
                                        return(<div key={index} className="box">
                                            <h2>{ele.heading}</h2>
                                            <select id="">
                                                <option >0</option>
                                                <option >1</option>
                                                <option >2</option>
                                                <option >3</option>
                                                <option >4</option>
                                                <option >5</option>
                                                <option >6</option>
                                                <option >7</option>
                                                <option >8</option>
                                                <option >9</option>
                                                <option >10</option>
                                                <option >11</option>
                                                <option >12</option>
                                                <option >13</option>
                                                <option >14</option>
                                                <option >15</option>
                                                <option >16</option>
                                                <option >17</option>
                                            </select>
                                            <p>{ele.pera}</p>
                                        </div>)
                                    })}
                                </div>
                            </div>
                            <div className="btnces">
                            <div className="lefref">
                                <h3>traveler</h3>
                            </div>
                            <div className="lefref">
                                <button>done</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-2 col-2 d-lg-block d-sm-none d-none">
                    <div className="thecheckbox">
                        <input type="checkbox" id="Direct"/>
                        <label htmlFor="Direct">Direct flights only</label>
                    </div>
                </div>
            </div>
        </section>
        <section className="bookingfrom">
            <div className="formbox">
                <div className="first">
                    <div className="thfrombtn" style={{flexDirection : order}}>
                        <div className="bigbtn">
                        <button onClick={() => hideformbox("block")}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.33 3.57L5.7 9.955l.79.07-1.96-1.478a.75.75 0 0 0-.753-.087l-2.1.925C.73 9.856.359 10.967.817 11.88c.11.22.263.417.45.577l3.997 3.402a2.94 2.94 0 0 0 3.22.4l3.62-1.8-1.084-.671v5.587a1.833 1.833 0 0 0 2.654 1.657l1.88-.932a1.85 1.85 0 0 0 .975-1.226l1.87-7.839-.396.498 3.441-1.707a3.494 3.494 0 1 0-3.11-6.259zm.672 1.342a1.994 1.994 0 0 1 1.775 3.571l-3.44 1.707a.75.75 0 0 0-.396.498l-1.87 7.838a.35.35 0 0 1-.185.232l-1.88.932a.335.335 0 0 1-.486-.304V13.79a.75.75 0 0 0-1.084-.672l-3.62 1.8a1.44 1.44 0 0 1-1.578-.197l-3.997-3.402a.35.35 0 0 1 .073-.577l2.067-.91-.754-.087 1.96 1.478a.75.75 0 0 0 .79.07l12.63-6.383zm-3.272.319l-4.46-2.26a1.852 1.852 0 0 0-1.656-.001l-1.846.912a1.85 1.85 0 0 0-.295 3.128l2.573 1.955a.75.75 0 1 0 .908-1.194L8.38 5.816a.35.35 0 0 1 .055-.591l1.845-.912a.351.351 0 0 1 .315 0l4.456 2.256a.75.75 0 0 0 .678-1.338z"></path></svg>Whare from ?</button>
                        <div className="frombox" style={{display : action}}>
                            <i className="fa-solid fa-xmark thexmark" onClick={() => hideformbox("none")}></i>
                            <input type="text" placeholder="Airport or city" />
                            <h3>Select multiple airports at once and compare flights</h3>
                        </div>
                        </div>
                        <button onClick={changedirection}><span><svg style={{fill : "#6203fc"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.5 15.75h12.75a.75.75 0 0 0 0-1.5H10.5a.75.75 0 0 0 0 1.5zm9.22-3.22l3 3v-1.06l-3 3a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06zM13.5 8.25H.75a.75.75 0 0 0 0 1.5H13.5a.75.75 0 0 0 0-1.5zm-9.22 3.22l-3-3v1.06l3-3a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06z"></path></svg></span></button>
                        <div className="bigbtn">
                        <button onClick={() => hideformbox2("block")}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.906 12.996l-12.72-6.2.421.672-.006-2.457a.75.75 0 0 0-.386-.654L5.207 3.244c-.95-.468-2.058-.091-2.51.826a1.85 1.85 0 0 0-.187.706l-.295 5.242a2.95 2.95 0 0 0 1.63 2.802l3.618 1.8-.117-1.27-4.461 3.359a1.85 1.85 0 0 0 .289 3.13l1.883.933a1.85 1.85 0 0 0 1.564.037l7.381-3.248-.636-.014 3.44 1.71a3.494 3.494 0 1 0 3.11-6.259.75.75 0 0 0-.334-.078h-.005v.75l.329-.674zm-.658 1.348a.75.75 0 0 0 .329.076h.005v-.75l-.334.672a1.994 1.994 0 1 1-1.774 3.571l-3.44-1.71a.75.75 0 0 0-.636-.014l-7.38 3.247a.35.35 0 0 1-.295-.008l-1.881-.932a.35.35 0 0 1-.053-.59l4.46-3.358a.75.75 0 0 0-.118-1.27l-3.618-1.8a1.45 1.45 0 0 1-.8-1.377l.295-5.238a.35.35 0 0 1 .504-.29l1.975 1.096-.386-.654.006 2.457a.75.75 0 0 0 .421.672l12.72 6.2zm-2.234-2.419l-.9-4.918a1.85 1.85 0 0 0-.995-1.32l-1.853-.92a1.85 1.85 0 0 0-2.669 1.657v3.234a.75.75 0 0 0 1.5 0V6.425a.35.35 0 0 1 .505-.313l1.85.918a.35.35 0 0 1 .187.249l.9 4.916a.75.75 0 1 0 1.475-.27z"></path></svg>RPR Swami Vivekananda Airport</button>
                        <div className="frombox" style={{display : action2}}>
                            <i className="fa-solid fa-xmark thexmark" onClick={() => hideformbox2("none")}></i>
                            <div className="inputbox secinputbox">
                                <label><span>RPR </span>Raipur</label>
                                <input type="text" placeholder="Airport or city" />
                            </div>
                            <h3>Select multiple airports at once and compare flights</h3>
                        </div>
                        </div>                
                    </div>
                    <button className="lastbtn" style={{background: "#6203fc"}}>Search</button>
                </div>
            </div>
        </section>
    </>)
}

export default Bookingflight