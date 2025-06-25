import React from "react";
import { useState } from "react";
import { createPuppy } from "../api/api";

const Addpuppy = () => {
  const [puppyname, setPuppyname] = useState("");
  const [puppybreed, setPuppybreed] = useState("");

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
