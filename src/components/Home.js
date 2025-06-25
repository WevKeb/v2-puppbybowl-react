import React, { useEffect, useState } from "react";
import { fetchAllPuppies } from "../api/api";
import "./Home.css";
import Puppycard from "./Puppycard";
import Searchbar from "./Searchbar";

const Home = () => {
  const [puppies, setPuppies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchAllPuppies(setPuppies);
  }, []);

  return (
    <div className="home-body-container">
      <h2 className="page-title">
        Here are all the puppies in the Puppy Bowl!
      </h2>
      <div className="home-searchbar">
        <Searchbar
          setPuppies={setPuppies}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="puppy-container">
        <Puppycard puppies={puppies} />
      </div>
    </div>
  );
};

export default Home;
