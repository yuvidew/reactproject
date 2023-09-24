import React from "react";

const Explorindia = () =>{

    const traplacelist = [
        {imgsrc : "https://r-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" , heading : "Goa" , pera : "5,252 properties"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" , heading : "New Delhi" , pera : "2,926 properties"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=",heading : "mumbai" , pera : "1,651 properties"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/170x136/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=",heading : "jaipur" , pera : "1,562 properties"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/170x136/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=",heading : "bangalore" , pera : "2,047 properties"},
        {imgsrc : "https://r-xx.bstatic.com/xdata/images/region/170x136/68606.jpg?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o=",heading : "north goa" , pera : "3,910 properties"},
        {imgsrc : "https://r-xx.bstatic.com/xdata/images/city/170x136/684938.jpg?k=9d07ff707ce59768769b5e9a5381a4c705d921209dafd8fd0e2f1a6acdf0c68a&o=",heading : "udaipur" , pera : "815 properties"},
        {imgsrc : "https://r-xx.bstatic.com/xdata/images/city/170x136/684682.jpg?k=30cf9de93f2a0f87eed7d2d0d9b3e6eccd5dcf3a4b68b4e0151c0800ddc84af7&o=",heading : "lonavala" , pera : "755 properties"},
        {imgsrc : "https://r-xx.bstatic.com/xdata/images/city/170x136/684769.jpg?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o=",heading : "puducherry" , pera : "688 properties"},
        {imgsrc : "https://q-xx.bstatic.com/xdata/images/city/170x136/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o=",heading : "ooty" , pera : "471 properties"},
    ]

    const trandinglist = [
        {imgsrc : "https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=", heading : "New Delhi"},
        {imgsrc : "https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=", heading : "bangalore"},
    ]

    const trandinglist2 = [
        {imgsrc2 : "https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=", heading2 : "mumbai"},
        {imgsrc2 : "https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=", heading2 : "chennai"},
        {imgsrc2 : "https://cf.bstatic.com/xdata/images/city/600x600/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=", heading2 : "hyderabad"},
    ]

    
    return(
        <section className="exploreind row ">
            <div className="row theexplorfirstsect expobbox">
            <h1 className="mt-3">Explore India</h1>
            <p>These popular destinations have a lot to offer</p>
                <div className="travlingplaces">
                    <div className="travlingplacecont" >
                        {traplacelist.map((val, index) =>{
                            return(
                                <div key={index} className="box">
                                    <div className="imgbox">
                                        <img src={val.imgsrc}/>
                                    </div>
                                    <h2>{val.heading}</h2>
                                    <p>{val.pera}</p>
                                </div>
                                )
                        })}
                    </div>
                </div>
            </div>
            <div className="row expobbox">
            <h1 className="mt-3">Trending destinations</h1>
            <p>These popular destinations have a lot to offer</p>
            <div className="Trendingbox row" >
                {trandinglist.map((ele, index) =>{
                    return(<div key={index} className="col-6 theconboc" >
                                <div className="box">
                                    <img src={ele.imgsrc} />
                                    <div className="textbox">
                                        <div className="thetext">
                                        <h1>{ele.heading}</h1>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg==" />
                                        </div>
                                    </div>
                                </div>
                            </div>)
                })}
            </div> 
            <div className="Trendingbox row Trendingbox2" >
                {trandinglist2.map((ele, index) =>{
                    return(<div key={index} className="col-4 theconboc" >
                                <div className="box">
                                    <img src={ele.imgsrc2} />
                                    <div className="textbox">
                                        <div className="thetext">
                                        <h1>{ele.heading2}</h1>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAgVBMVEX///8AAAAAAAAAAAAAAAD////29vbo7Pfm6PTg5vTg5PLM2e7Gz+T1w5nAyuH1v5P0uoi2wt2zw+T0t4S0wNzzsnvysHn3rG2qtNqqs9nxp2rwomHwoV3unFjsl0/slUyLnciHmsd3jb8qm2MgmlkqlV8ellook10YlFUjj1gfjVULJqFEAAAABXRSTlMAESIzRJTdRHwAAACSSURBVHjardHLDoIwEIXhtlgQGctVvBVRqBR8/wd0FJuQdFyY+K9O5lsO+2ecDO+ajDOht0RngZCWXqlGaLKdV9YgtPVpbo99Zn1BkK4IIJIuhNDdiyQpnIQLALjeQBGQq65TOQHrI8BhQ4CMqyqWC7BmnDPGDG7aF/SDV39HmCiwbyCaEB5kgvFgRRTwrx/8vSeVOB6PJ+z3YAAAAABJRU5ErkJggg==" />
                                        </div>
                                    </div>
                                </div>
                            </div>)
                })}
            </div>    
            </div>
        </section>
    )
}

export default Explorindia