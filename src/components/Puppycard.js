import React from 'react';
import "./Puppycard.css"

const Puppycard = ({puppies}) => {
    return (
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
    );
};

export default Puppycard;