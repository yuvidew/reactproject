import React from "react";

const Propertistype = () =>{

    const proplist = [
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" , heading : "hotels"},
        {imgsrc : "https://r-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" , heading : "apartments"},
        {imgsrc : "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" , heading : "resorts"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" , heading : "villas"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=" , heading : "cabins"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=" , heading : "cottages"},
        {imgsrc : "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=" , heading : "glamping"},
        {imgsrc : "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=" , heading : "serviced apartments"},
        {imgsrc : "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=" , heading : "holiday homes"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o=" , heading : "hostels"},
        {imgsrc : "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450093.jpeg?k=aa5cc7703f3866af8ffd6de346c21161804a26c3d0a508d3999c11c337506ae1&o=" , heading : "motels"},
    ]

    const homeguesstslove = [
        {imgsrc : "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=", heading : "oriente palace apartments", pera1 : "centro, spain, mardrid", spancont : "8.9", pera2 : "fabulos - 2,974 ", price : "7,832"},
        {imgsrc : "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=", heading : "numa i vita apartments", pera1 : "fortezz da basso. italy, florece", spancont : "9.3", pera2 :  "superb - 1,184", price : "30,485"},
        {imgsrc : "https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=", heading : "chevalthree Quays at the tower of location", pera1 : "city of london, untied kingdome, london", spancont : "9.4", pera2 :  "superb - 614", price : "56,700"},
        {imgsrc : "https://cf.bstatic.com/xdata/images/hotel/square600/285825586.webp?k=acd6fa84499149459629d3c7ebc4008d3fe4f675a67c0202be2622dac900b7f1&o=", heading : "RAMBLA BEACH barcelonast apartments", pera1 : "sant marti, spain, barcelona", spancont : "8.6", pera2 :  "fabulous - 466 ", price : "18,698"},
        {imgsrc : "https://cf.bstatic.com/xdata/images/hotel/square600/438349362.webp?k=f67f0e7e54be1c0678f18cf9ae1271c4220a487901ae0bf906fed8ba0265e38d&o=", heading : "casa portuguesa prata", pera1 : "santa maria maior, portugal, lisboa", spancont : "8.0", pera2 :  "very good - 56 reviews", price : "42,128"},
        {imgsrc : "https://cf.bstatic.com/xdata/images/hotel/square600/477085213.webp?k=29caadf3e1563bb00c8f93a2af40946a5205edd01343aeb5703ff6740613f747&o=", heading : "3 epoques apartments by prague residences ", pera1 : "prague 1, czech republic praha 1", spancont : "8.7", pera2 :  "fabulous - 460 reviews", price : "9,443"},
        {imgsrc : "https://cf.bstatic.com/xdata/images/hotel/square600/477071028.webp?k=c9d87661dfac89970e50379629aa316a4905033f8f4a13cb21fd28484256d626&o=", heading : "6 continents apartments by parague residences", pera1 : "prague 1, czech republic, prague", spancont : "8.3", pera2 :  "very good - 328 reviews", price : "14,345"},
        {imgsrc : "https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&o=", heading : "the apartments by the solane clude", pera1 : "kensington and chelsa, united, united kingdom", spancont : "9.0", pera2 :  "superb - 172 reviews", price : "45,879"},
    ]

    return(<>
        <section className="propertitype row">
            <div className="thepropertis col-12">
                <h2>Browse by property type</h2>
                <div className="proconstener  mt-4">
                    <div className="thepropertisbox ">
                            {proplist.map((ele , index) =>{
                                return(
                                    <div key={index} className="box">
                                        <div className="imgbox">
                                            <img src={ele.imgsrc} />
                                        </div>
                                        <h2 className="mt-4">{ele.heading}</h2>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
            <div className="homeguest mt-5">
                <h2>Homes guests love</h2>
                <div className="homegustcont mt-2">
                    <div className="homeguestboxs">
                        {homeguesstslove.map((ele, index) =>{
                            return(
                                <div key={index} className="box">
                                    <div className="imgbox">
                                        <img src = {ele.imgsrc} />
                                    </div>
                                    <div className="textbox">
                                        <div className="thetext">
                                        <h3>{ele.heading}</h3>
                                        <p>{ele.pera1}</p>
                                        <p className="mt-2 rev"><span>{ele.spancont}</span>{ele.pera2}</p>
                                        </div>
                                        <div className="price">
                                        Start from <span><i className="fa fa-inr" aria-hidden="true"></i> {ele.price}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Propertistype