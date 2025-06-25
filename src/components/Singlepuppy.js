import React, { useEffect, useState } from "react";
import "./Singlepuppy.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchPuppy, deletePuppy } from "../api/api";

const Singlepuppy = () => {
  const { id } = useParams();
  const [puppy, setPuppy] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    console.log(id, "this is id from params");
    fetchPuppy(id, setPuppy);
  }, []);

  return (
    <div className="singlepuppy-body">
      <h2>This is the puppy:</h2>

      <div key={puppy.id} className="singlepuppy-card">
        <button
          className="back-button"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to All Puppies
        </button>
        <img src={puppy.imageUrl} />
        <p>Name: {puppy.name}</p>
        <p>Breed: {puppy.breed}</p>
        <p>Status: {puppy.status}</p>
        <button
          onClick={() => {
            deletePuppy(puppy.id);
            navigate("/");
          }}
        >
          Delete Puppy
        </button>
      </div>
    </div>
  );
};

export default Singlepuppy;
