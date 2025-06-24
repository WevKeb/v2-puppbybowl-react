import React, { useEffect, useState } from 'react';
import Singlepuppy from './Singlepuppy';
import "./Home.css"
import Puppycard from './Puppycard';

const Home = () => {
    const [puppies, setPuppies] = useState([]);

    useEffect(()=>{
        const fetchAllPuppies = async () => {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players`)
            const {data} = await response.json();
            setPuppies(data.players);
        }
        fetchAllPuppies();
    }, []);
        

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