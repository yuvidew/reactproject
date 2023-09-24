import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import Flight from "./components/Flight";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const App = () =>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/flight" element={<Flight/>}/>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App