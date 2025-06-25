import React, { useEffect, useState } from "react";
import "./Singlepuppy.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Singlepuppy = () => {
  const { id } = useParams();
  const [puppy, setPuppy] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPuppy = async () => {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players/${id}`
        );
        const {
          data: { player },
        } = await response.json();
        setPuppy(player);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPuppy();
  }, []);

  const deletePuppy = async (id) => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/JSON",
          },
        }
      );
    } catch (error) {
      console.error("error deleting that puppy", error);
    }
  };

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
