import React from "react";


const Emailsection = () =>{
    return(<>
        <section className="emailsection">
            <form action="#">
                <h1>Save time, save money!</h1>
                <p>Sign up and we'll send the best deals to you</p>
                <div className="inputbox">
                    <input type="email" placeholder="Your Email address" required/>
                    <button>Subscribe</button>
                </div>
            </form>
        </section>
    </>)
}

export default Emailsection