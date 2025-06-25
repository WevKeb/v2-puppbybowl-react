import React from "react";
import { useState } from "react";

const Addpuppy = () => {
  const [puppyname, setPuppyname] = useState("");
  const [puppybreed, setPuppybreed] = useState("");

  const createPuppy = async (playerObj) => {
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/JSON",
          },
          body: JSON.stringify(playerObj),
        }
      );
      const result = await response.json();
    } catch (error) {
      console.error("there was an error creating the new puppy", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //   console.log(puppyname, puppybreed);
          createPuppy({ name: puppyname, breed: puppybreed });
          setPuppybreed("");
          setPuppyname("");
        }}
      >
        <label htmlFor="name">Puppy Name: </label>
        <input
          type="text"
          id="name"
          value={puppyname}
          onChange={(e) => {
            e.preventDefault();
            setPuppyname(e.target.value);
          }}
        ></input>
        <label htmlFor="breed">Puppy Breed: </label>
        <input
          type="text"
          id="breed"
          value={puppybreed}
          onChange={(e) => {
            e.preventDefault();
            setPuppybreed(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Addpuppy;
