import React from "react";

const Footersect = () =>{
    

    const btnlist = [
        {btntext : "Sign In"},
        {btntext : "Register"},
    ]

    
    return(<>
        <section className="thesecondfootersection row ">
        <div className="col-12">
            <div className="theserisignupbar">
                <div className="imgbox">
                    <img src="https://t-cf.bstatic.com/design-assets/assets/v3.85.0/illustrations-traveller/GlobeGeniusBadge.png" />
                </div>
                <div className="textbox">
                    <h1>Get instant discounts</h1>
                    <p>Simply sign into your Booking.com account and look for the blue Genius logo to save</p>
                    <div className="btnvox">
                        {btnlist.map((ele, index) =>{
                            return(<button key={index}>{ele.btntext}</button>)
                        })}
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="thefootersection row ">
            <div className="col-12">
                <div className="discover">
                    <div className="textcont">
                        <div className="curcul"></div>
                        <div className="textbox">
                            <div className="thetext">
                            <h1>Find <span>holiday home</span> <br/>for your next trip</h1>
                            <button><a href="#">Discover homes</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="imgbox">
                        <img src="https://cf.bstatic.com/psb/capla/static/media/bh_aw_cpg_main_image.b4347622.png"/>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
export default Footersect