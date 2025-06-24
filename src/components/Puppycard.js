import React from 'react';
import "./Puppycard.css"
import { useNavigate } from 'react-router-dom';

const Puppycard = ({puppies}) => {
    const navigate = useNavigate();
    
    return (
        <div className="puppy-container">
            {puppies.map((puppy)=>
                    <div key={puppy.id} className="puppy-card">
                        <h3>{puppy.name}</h3>
                        <img src={puppy.imageUrl} />
                        <p>{puppy.breed}</p>
                        <button
                            onClick={()=>{
                                navigate(`/puppy/${puppy.id}`)
                            }}
                        >See More Info</button>
                    </div>
                )}
        </div>
    );
};

export default Puppycard;