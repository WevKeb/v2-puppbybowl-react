import React from 'react';
import Singlepuppy from './Singlepuppy';
import "./Home.css"

const Home = ({puppies}) => {
    
    return (
        <div className="home-body-container">
            <h2 className="page-title">Here are all the puppies in the Puppy Bowl!</h2>
            <div className="puppy-container">
                {puppies.map((puppy)=>
                <div key={puppy.id} className="puppy-card">
                    <h3>{puppy.name}</h3>
                    <img src={puppy.imageUrl} />
                    <p>{puppy.breed}</p>
                    <button>See More Info</button>
                </div>
            )}
            </div>
            
        </div>
    );
};

export default Home;