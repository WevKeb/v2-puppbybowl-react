import React from "react";
import Home from "./Home";
import { useState } from "react";
import Singlepuppy from "./Singlepuppy";
import Addpuppy from "./Addpuppy";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  const [pupDeleted, setPupDeleted] = useState(false);

  return (
    <div className="Main">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home pupDeleted={pupDeleted} setPupDeleted={setPupDeleted} />
          }
        ></Route>
        <Route path="/addpuppy" element={<Addpuppy />}></Route>
        <Route
          path="/puppy/:id"
          element={
            <Singlepuppy
              pupDeleted={pupDeleted}
              setPupDeleted={setPupDeleted}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Main;
