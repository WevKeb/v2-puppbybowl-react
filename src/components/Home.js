import React, { useEffect, useState } from "react";
import { fetchAllPuppies } from "../api/api";
import "./Home.css";
import Puppycard from "./Puppycard";
import Searchbar from "./Searchbar";

const Home = ({ pupDeleted, setPupDeleted }) => {
  const [puppies, setPuppies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchAllPuppies(setPuppies);
  }, []);

  //this will run only when pupDeleted is changed, which is change din teh deletePuppy func in API. so it will trigger a refetch of the puppies and display the pups now with the deleted one not showing
  useEffect(() => {
    fetchAllPuppies(setPuppies);
  }, [pupDeleted]);

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
