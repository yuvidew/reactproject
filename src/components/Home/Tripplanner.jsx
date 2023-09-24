import React, { useState } from "react";

const Tripplanner = () =>{

    const btnlist = [
        {icls : "fa-solid fa-building", pera : "City"},
        {icls : "fa-solid fa-mountain-sun", pera : "Relax"},
        {icls : "fa-solid fa-bowl-food", pera : "Food"},
        {icls : "fa-solid fa-heart", pera : "Romance"},
        {icls : "fa-solid fa-umbrella", pera : "Beachs"},
        {icls : "fa-solid fa-person-biking", pera : "Outdoors"},
    ]

    const tripcardlist = [
        {imgsrc1 : "https://cf.bstatic.com/xdata/images/city/300x240/955178.jpg?k=c45cb23d9b67cea63b011bdb1204647a21f2a32b640f6639a9ec192d554b1332&o=" , heading1 : "chittaurgarh", pera1 : "334 km away", imgsrc2 : "https://cf.bstatic.com/xdata/images/city/300x240/941832.jpg?k=4b04ef5bfde6fb93e7ac15b5b46fb35194dba992815b9308a822eff5169bd49b&o=" , heading2 : "gwalior", pera2 : "335 km away", imgsrc3 : "https://cf.bstatic.com/xdata/images/city/300x240/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=" , heading3 : "jaipur", pera3 : "335 km away", imgsrc4 : "https://cf.bstatic.com/xdata/images/city/300x240/684501.jpg?k=225f7713b3f47f0c2c580c34c35582ba70331757bcc8dc32e7f17072c80805ff&o=" , heading4 : "agra", pera4 : "335 km away", imgsrc5 : "https://cf.bstatic.com/xdata/images/city/300x240/944105.jpg?k=fa2f7b0d790b74d4a9e8876cb27d31bc65ca44956b1537374849537fc66869eb&o=" , heading5 : "mathura", pera5 : "439 km away", imgsrc6 : "https://cf.bstatic.com/xdata/images/city/300x240/765646.jpg?k=255e7da04ed366f49414b0553b823852d84c79cb5fd4e50036bc7e1dd9a1e21c&o=" , heading6 : "allahabad", pera6 : "471 km away", imgsrc7 : "https://cf.bstatic.com/xdata/images/city/300x240/684683.jpg?k=698b609dd05f38097716054efd8aa7f0af75bee3a241e411e72d8710cc80e020&o=" , heading7 : "lucknow", pera7 : "533 km away"},
        {imgsrc1 : "https://cf.bstatic.com/xdata/images/city/300x240/633632.jpg?k=f4f893cc0751b51df869b9e5f733275b1e38e864cf387f4a25c539405a336dc1&o=" , heading1 : "saputara", pera1 : "480 km away", imgsrc2 : "https://cf.bstatic.com/xdata/images/city/300x240/708703.jpg?k=a271dd26c2be91135b6d59cd08108f5d115c9842dfb92f2e166926004c9dad61&o=" , heading2 : "lavasa", pera2 : "675 km away", imgsrc3 : "https://cf.bstatic.com/xdata/images/city/300x240/741104.jpg?k=34493435317fa47d4d3ed1c286864e3173989a334a306aa4e2cd8f64efdaff34&o=" , heading3 : "panchgani", pera3 : "702 km away", imgsrc4 : "https://cf.bstatic.com/xdata/images/city/300x240/948923.jpg?k=5e6870021d67f9d9b1bb775aa03fd151d9fdd39bffed9e7cc1b411b545d4caa5&o=" , heading4 : "bhim tal", pera4 : "710 km away", imgsrc5 : "https://cf.bstatic.com/xdata/images/city/300x240/830105.jpg?k=3e7e325abf12981675a124c447ee764d443ff1e92611230efe820107d77ab4b2&o=" , heading5 : "kasauli", pera5 : "849 km away", imgsrc6 : "https://cf.bstatic.com/xdata/images/city/300x240/744171.jpg?k=c885099ccb332745682edc6901ec0c4802fe1c1e6dc85502d6d7f46ef9ac0a85&o=" , heading6 : "pelling", pera6 : "1,177 km away", imgsrc7 : "https://cf.bstatic.com/xdata/images/city/300x240/765655.jpg?k=246ca352c6830576793e0280e603384e36067f9dd537e3c71f8c0fa1016a9b12&o=" , heading7 : "kalimpong", pera7 : "1,191 km away"},
        {imgsrc1 : "https://cf.bstatic.com/xdata/images/city/300x240/684639.jpg?k=726bd03cf3c5281ee8dd476a879a5421ca6bd30c1a6086bc53bf625145e47176&o=" , heading1 : "indore", pera1 : "168 km away", imgsrc2 : "https://cf.bstatic.com/xdata/images/city/300x240/815250.jpg?k=c5dc2dff5b85bc115053691c5863fa92265a925539471b531454f65e07cf6c3e&o=" , heading2 : "nagpur", pera2 : "292 km away", imgsrc3 : "https://cf.bstatic.com/xdata/images/city/300x240/637293.jpg?k=5e58ee01e1733b832e2e5b19074226ae6ff3207dd6bb719d0fec416b7af66d5f&o=" , heading3 : "pushkar", pera3 : "458 km away", imgsrc4 : "https://cf.bstatic.com/xdata/images/city/300x240/684515.jpg?k=cf7fecf7e8b51638d173d23a0954bf9dd20d98088f9fb5d38a3017fe6880aed3&o=" , heading4 : "ahmedabad", pera4 : "493 km away", imgsrc5 : "https://cf.bstatic.com/xdata/images/city/300x240/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" , heading5 : "mumbai", pera5 : "954 km away", imgsrc6 : "https://cf.bstatic.com/xdata/images/city/300x240/946314.jpg?k=a5e9c20807c180f3a8276f74b84ea2c4a2e8f2b51bddc0cb9a9dd9f2d9c784a0&o=" , heading6 : "mapusa", pera6 : "1,036 km away", imgsrc7 : "https://cf.bstatic.com/xdata/images/city/300x240/664205.jpg?k=7bf3493b829d176637eb4cee4c56c95bec5f26b58eb702d4eb45e4360da6f5e9&o=" , heading7 : "karwar", pera7 : "1,067 km away"},
        {imgsrc1 : "https://cf.bstatic.com/xdata/images/city/300x240/636222.jpg?k=568ba81b1f994a9249b9a1311025f73b794069a60aa7e0145d9a19d61f972de8&o=" , heading1 : "vijayawada", pera1 : "535 km away", imgsrc2 : "https://cf.bstatic.com/xdata/images/city/300x240/684822.jpg?k=8e3dfdbe7474b16f993bead046bb1d3d329cdd68c6aee6ec72c8e935ba426a9f&o=" , heading2 : "pune", pera2 : "867 km away", imgsrc3 : "https://cf.bstatic.com/xdata/images/city/300x240/935891.jpg?k=05668cbae7eaa0f13b675a0c91164465bdc3394db46c6bb555e9dacdbbc4c025&o=" , heading3 : "neemrana", pera3 : "919 km away", imgsrc4 : "https://cf.bstatic.com/xdata/images/city/300x240/684622.jpg?k=f9eacb40b8f7c8560afc74cdcfe2e7028e5117a36a0d8d3356f735ea3ac20f4f&o=" , heading4 : "gurgaon", pera4 : "926 km away", imgsrc5 : "https://cf.bstatic.com/xdata/images/city/300x240/729526.jpg?k=2657ff1b380b22aa06ad175455582f16844ecdb395a57205d0ab262e8e2cca45&o=" , heading5 : "bangalore", pera5 : "1,013 km away", imgsrc6 : "https://cf.bstatic.com/xdata/images/city/300x240/975522.jpg?k=adf832fff9217a2532ea5a80e0ba5b9f448111311a355cfc8c1f4170d3c2336c&o=" , heading6 : "old goa", pera6 : "1,013 km away", imgsrc7 : "https://cf.bstatic.com/xdata/images/city/300x240/939488.jpg?k=40e2bfa48768329f8893574b0f726caced179979d5ba15524de928a84b2ab4ed&o=" , heading7 : "madgaon", pera7 : "1,045 km away"},
        {imgsrc1 : "https://cf.bstatic.com/xdata/images/city/300x240/684799.jpg?k=397354c65103bbb54623a26a643e9eec8ca14d7de26a260d84c3b0201404fd02&o=" , heading1 : "puri", pera1 : "464 km away", imgsrc2 : "https://cf.bstatic.com/xdata/images/city/300x240/937083.jpg?k=951a4b4c5f6c1f146f2744dc938e4cdae2610ceac2a5672d70b69676059d5ac2&o=" , heading2 : "dapoli", pera2 : "965 km away", imgsrc3 : "https://cf.bstatic.com/xdata/images/city/300x240/765485.jpg?k=cfd6ac6a474db15e5cfb6ede2b343e55b7a8b433a53802df15a705afe2c441b9&o=" , heading3 : "diveagar", pera3 : "966 km away", imgsrc4 : "https://cf.bstatic.com/xdata/images/city/300x240/973491.jpg?k=534b6dd7c8caa05675ec5c30121ba35d210ff97df37ce7b3b16a16ceba277f5c&o=" , heading4 : "malvan", pera4 : "1,034 km away", imgsrc5 : "https://cf.bstatic.com/xdata/images/city/300x240/630027.jpg?k=58e7a7ae31133fdd44bca3d96be4dc789b81088fe92cf293c0b5b21abe6d486d&o=" , heading5 : "Arambol", pera5 : "1,038 km away", imgsrc6 : "https://cf.bstatic.com/xdata/images/city/300x240/684615.jpg?k=c842e0a2bf64c6b425f683b2025585e4e073562cd308beb5e0b5c89bab170846&o=" , heading6 : "calangute", pera6 : "1,043 km away", imgsrc7 : "https://cf.bstatic.com/xdata/images/city/300x240/930591.jpg?k=72e23b49576d1dc4a6d5b0b718e922d8c4bb3d2c3d650672fbaf7749c5442762&o=" , heading7 : "betabatim", pera7 : "1,047 km away"},
        {imgsrc1 : "https://cf.bstatic.com/xdata/images/city/300x240/684597.jpg?k=b95763a25bb32f8c6fd9137aa44b5930920118f95c3d6f2e30da32420f4ea23c&o=" , heading1 : "darjeeling", pera1 : "931 km away", imgsrc2 : "https://cf.bstatic.com/xdata/images/city/300x240/684880.jpg?k=e39b50ba8be4c6c6c413c963af6e0d452dbe0decaf72e13f9f798e65de549107&o=" , heading2 : "rishikesh", pera2 : "1,039 km away", imgsrc3 : "https://cf.bstatic.com/xdata/images/city/300x240/684611.jpg?k=021e8bea3c47bb30693d0a24cb623899876546a60e8472d026fab5474fd75ed7&o=" , heading3 : "dehradun", pera3 : "1,072 km away", imgsrc4 : "https://cf.bstatic.com/xdata/images/city/300x240/735273.jpg?k=1b8b10b73c1746adac050ce980bb12049f66041ee0f71d8c34d1d53d063ab406&o=" , heading4 : "chikmagalur", pera4 : "1,077 km away", imgsrc5 : "https://cf.bstatic.com/xdata/images/city/300x240/916373.jpg?k=ef5ba9b031293b8c6c14f1eed465f324daf460535e7a646d026463fb01a12358&o=" , heading5 : "chaill", pera5 : "1,168 km away", imgsrc6 : "https://cf.bstatic.com/xdata/images/city/300x240/950017.jpg?k=405a748a2d2a544cbb0b4e535cb2f2bfeb6f809fee7d9720174f9baa4183d5b7&o=" , heading6 : "kalpetta", pera6 : "1,223 km away", imgsrc7 : "https://cf.bstatic.com/xdata/images/city/300x240/939453.jpg?k=0ec5070ec4bf5760a9fca8dde5a6abea436a2719c8cdb9d755fe153e3c115347&o=" , heading7 : "kasol", pera7 : "1,272 km away"},
    ]

    const [showcard, setshowcard] = useState(0)

    const showcarbox = (index) =>{
        setshowcard(index)
    }
    return(
    <div className="tripplannercont mt-5">
        <div className="thefirstcont">
            <h1>Quick and easy trip planner</h1>
            <p>Pick a vibe and explore the top destinations in India</p>
            <div className="btncont">
                <div className="btnbox">
                {btnlist.map((val, index) =>{
                    return(<button key={index} onClick={() => showcarbox(index)}><i className={val.icls} ></i><p>{val.pera}</p></button>)
                })}
                </div>
            </div>
            <div className="row">
                <div className="troplannercatdcont col-12">
                    <div className="troplannerboxs">
                        {tripcardlist.map((ele ,index) =>{
                            return(
                            <div key = {index} className={showcard === index ? "active" : "hide"}>
                                <div className="box">
                                    <div className="imgbox">
                                        <img src={ele.imgsrc1} />
                                    </div>
                                    <h2>{ele.heading1}</h2>
                                    <p>{ele.pera1}</p>
                                </div>
                                <div className="box">
                                    <div className="imgbox">
                                        <img src={ele.imgsrc2} />
                                    </div>
                                    <h2>{ele.heading2}</h2>
                                    <p>{ele.pera2}</p>
                                </div> <div className="box">
                                    <div className="imgbox">
                                        <img src={ele.imgsrc3} />
                                    </div>
                                    <h2>{ele.heading3}</h2>
                                    <p>{ele.pera3}</p>
                                </div> <div className="box">
                                    <div className="imgbox">
                                        <img src={ele.imgsrc4} />
                                    </div>
                                    <h2>{ele.heading4}</h2>
                                    <p>{ele.pera4}</p>
                                </div> <div className="box">
                                    <div className="imgbox">
                                        <img src={ele.imgsrc5} />
                                    </div>
                                    <h2>{ele.heading5}</h2>
                                    <p>{ele.pera5}</p>
                                </div> <div className="box">
                                    <div className="imgbox">
                                        <img src={ele.imgsrc6} />
                                    </div>
                                    <h2>{ele.heading6}</h2>
                                    <p>{ele.pera6}</p>
                                </div> <div className="box">
                                    <div className="imgbox">
                                        <img src={ele.imgsrc7} />
                                    </div>
                                    <h2>{ele.heading7}</h2>
                                    <p>{ele.pera7}</p>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Tripplanner