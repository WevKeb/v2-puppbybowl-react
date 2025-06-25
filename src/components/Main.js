import React from "react";
import Home from "./Home";
import Singlepuppy from "./Singlepuppy";
import Addpuppy from "./Addpuppy";
import {Routes, Route} from "react-router-dom"
import Navbar from "./Navbar";




const Main = () => {


    return (
        <div className="Main">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/addpuppy" element={<Addpuppy />}></Route>
            <Route path="/puppy/:id" element={<Singlepuppy />}></Route>
          </Routes>
        </div>
    )
} 

export default Main;