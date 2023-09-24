import React ,{ useState } from "react";


const Theworldflight = () =>{
    const [showstie, setshowstie] = useState(0)
    const chngedestinetin = (index) =>{
        setshowstie(index)
    }
    const thepriceslist = [
        {imgsrc : "https://t-cf.bstatic.com/design-assets/assets/v3.92.2/illustrations-traveller/MagnifyingGlassUsp.png", heading : "Search a huge selection", text : "Easily compare flights, airlines, and prices – all in one place"},
        {imgsrc : "https://t-cf.bstatic.com/design-assets/assets/v3.92.2/illustrations-traveller/MoneyUsp.png", heading : "Pay no hidden fees", text : "Get a clear price breakdown every step of the way"},
        {imgsrc : "https://t-cf.bstatic.com/design-assets/assets/v3.92.2/illustrations-traveller/TicketsUsp.png", heading : "Get more flexibility", text : "Change your travel dates with the Flexible ticket option*"},
    ]

    const homeguesstslove = [
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/684764.jpg?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o=", heading : "new delhi,", },
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/971345.jpg?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o=", heading : "pune", },
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/684757.jpg?k=5cd52ccbba6806c371689dab0da9678a5c1f4dcef697ea976a000f5e53ac4f18&o=", heading : "kolkata",},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/684533.jpg?k=efaef4796fa555481ddabf686c3fc66433b50ba69c936d6f702b1125b1d06748&o=", heading : "hyderabad", },
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=", heading : "numbai",  },
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/684820.jpg?k=29ee5cee377c4e6cfba7a474d02914660d3311f0b75d1b9cf3bdefef0eabffdd&o=", heading : "panaji ", },
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/684533.jpg?k=efaef4796fa555481ddabf686c3fc66433b50ba69c936d6f702b1125b1d06748&o=", heading : "bangalore",  },
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/square210/684568.jpg?k=2e0d30ebcaf31e7469617ea53a01cdaf68d14c506d1167af9b9b38e53832f156&o=", heading : "dubai", },
    ]

    return(<>
        <div className="container pt-1">
            <div className="theworkdwide">
                <h1>Trending cities</h1>
                <p>Book flights to a destination popular with travelers from India</p>
            </div>
            <div className="homeguest mt-1 mb-5">
                <div className="homegustcont mt-2" style={{height : "36rem"}}>
                    <div className="homeguestboxs" style={{height : "90%"}}>
                        {homeguesstslove.map((ele, index) =>{
                            return(
                                <div key={index} className="box">
                                    <div className="imgbox" style={{height : "75%"}}>
                                        <img src = {ele.imgsrc} />
                                    </div>
                                    <div className="textbox">
                                        <h3 style={{textTransform : "capitalize"}}>{ele.heading}, India</h3>
                                        <p>Sep 21 - sep 28 Round trip</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className="theproces">
            <div className="container">
                <div className="row">
                    {thepriceslist.map((ele, index) =>{
                        return(
                            <div key={index} className="col-lg-4 col-sm-6 col-12">
                                <div className="box">
                                    <div className="imgbox">
                                        <img src={ele.imgsrc} alt="" />
                                    </div>
                                    <div className="textbox">
                                        <h1>{ele.heading}</h1>
                                        <p>{ele.text}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>)
}

export default Theworldflight