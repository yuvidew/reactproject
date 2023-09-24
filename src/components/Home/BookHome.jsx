import React from "react";

const BookHome = () =>{
    const formlist = [
        {type : "text",spanitem : "fa-solid fa-bed", placeholder : "Where are you goning ?"},
        {type : "date",spanitem : "fa-solid fa-calendar-days", placeholder : "Check in date - Check out date"},
        {type : "text",spanitem : "fa-regular fa-user", placeholder : "2 adults - 0 hildren - 1 room"}
    ]

    const offercardlist = [
        {clasname : "firstseconf", heading : "Take your longest holiday yet", imgsrc : "https://r-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o=", pera : "Browse properties offering long-term stays, many at reduced monthly rates.", btncontent : "Find a Stay"},
        {clasname : "firstseconf", heading : "Fly away to your dream holiday", imgsrc : "https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.png?k=6bb1bf3c13db4a7ba3c22a2d1f1051f793c525a78104703b4dec3eb12101f545&o=", pera : "Get inspired, compare and book flights with more flexibility", btncontent : "Search for flights"},
        {clasname : "forsththerd", heading : "The great getaway, your way", imgsrc : "https://q-xx.bstatic.com/xdata/images/xphoto/714x300/204490944.jpeg?k=f1dbbec42645c0ed1dc25f1e0878ab449b461baf936dcd971ad8c63bf13d0dc6&o=", pera : "Save at least 15% on stays worldwide, from relaxing retreats to off-grid adventures", btncontent : "Find Getway Deals"},
        {clasname : "forsththerd", heading : "Save 15% with Late Escape Deals", imgsrc : "https://q-xx.bstatic.com/xdata/images/xphoto/714x300/261387541.jpeg?k=80d1571cedd0a363b9d9b78207914af9b1490c6a859cacd8dc090c866d1bbc94&o=", pera : "Explore thousands of destinations worldwide and save 15% or more", btncontent : "Find Late Escapes Deals"},
    ]
    return(
        <section className="home col-12">
            <h1>Find your next stay</h1>
            <p>Search low prices on hotels, homes and much more...</p>
            <form action="#">
                <div className="formbox">
                    {formlist.map((ele, index) =>{
                        return (
                            <div key={index} className="box">
                                <label><i className={ele.spanitem}></i></label>
                                <input type={ele.type} placeholder={ele.placeholder}/>
                            </div>
                        )
                    })}
                    <button>Search</button>
                </div>
            </form>
            <div className="conforbnox col-12">
                <div className="box">
                    <input type="checkbox" />
                    <p>I'm travelling for work</p>
                </div>
            </div>

            <section className="col-12 offerbox">
                <h2>Offers</h2>
                <p>Promotions, deals and special offers for you</p>
                <div className="Offerscardcontener">
                    <div className="Offersthecardpalxe">
                        {offercardlist.map((val, index) =>{
                            return(
                                <div key={index} className={val.clasname}>
                                    <div className="textbox">
                                        <h2>{val.heading}</h2>
                                        <p>{val.pera}</p>
                                        <button><a href="#">{val.btncontent}</a></button>
                                    </div>
                                    <div className="imgbox">
                                        <img src= {val.imgsrc}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default BookHome