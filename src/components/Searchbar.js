import React from "react";
import { useEffect } from "react";
import { searchPuppies } from "../api/api";

const Searchbar = ({ searchValue, setSearchValue, setPuppies }) => {
  //anytime the searchvalue is changed, we need to search through all the puppies to only include the ones matching the search
  useEffect(() => {
    searchPuppies(setPuppies, searchValue);
  }, [searchValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for puppy..."
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Searchbar;
