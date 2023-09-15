import React from "react"
import "./index.css"

const Textbox = (prop) =>{ 
  return (
    <div className="coontener" id={prop.id}>
      <h1>{prop.heading}</h1>
      <p>{prop.pera}</p>
    </div>
  )
}

export default Textbox