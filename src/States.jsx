import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const timer = new Date().toLocaleTimeString()
var states = "Good Morning"
var imagesrc = "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZyUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
if(timer >= "5:00:00 Am" && timer < "12:00:00 pm"){
    imagesrc = "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9ybmluZyUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    
}else if(timer >= "12:00:00 pm" && timer < "5:00:00 pm"){
    imagesrc = "https://images.unsplash.com/photo-1577257107590-fc448601f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZ0ZXJub29ufGVufDB8fDB8fHww&w=1000&q=80"
    states = "Good Afternone"
}else if(timer <= "5:00:00 pm" && timer < "9:00:00 pm"){
    imagesrc = "https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?cs=srgb&dl=pexels-reynaldo-brigworkz-brigantty-771883.jpg&fm=jpg"
    states = "Good Evening"
}else if(timer >= "9:00:00 pm" && timer < "5:00:00 AM"){
    imagesrc = "https://images.unsplash.com/photo-1577257107590-fc448601f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZ0ZXJub29ufGVufDB8fDB8fHww&w=1000&q=80"
    states = "Good Night"
}

function States(){
    return(
        <div className="contener">
            <img src={imagesrc}/>
            <div className="Statesbox">
                <p>{timer}</p>
                <h1>Hello Yuvi <span>{states}</span></h1>
            </div>
        </div>
    )
}

export default States