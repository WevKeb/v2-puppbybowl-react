import React from 'react';
import Singlepuppy from './Singlepuppy';
import "./Home.css"
import Puppycard from './Puppycard';

const Home = ({puppies}) => {
    
    return (
        <div className="home-body-container">
            <h2 className="page-title">Here are all the puppies in the Puppy Bowl!</h2>
            <div className="puppy-container">
                <Puppycard puppies={puppies} />
            </div>
            
        </div>
    );
};

export default Home;