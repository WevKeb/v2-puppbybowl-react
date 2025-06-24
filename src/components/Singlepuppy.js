import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Singlepuppy = () => {
    const {id} = useParams();
    const [puppy, setPuppy] = useState({});
    
    useEffect(()=>{
        const fetchPuppy = async () => {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players/${id}`);
            const {data:{player}} = await response.json();
            setPuppy(player);
        };
        fetchPuppy();
    }, []);



    return (
        <div>
            <h2>This is the puppy:</h2>
            
                <div key={puppy.id}>
                    <ul>
                        <li>Name: {puppy.name}</li>
                        <li>Breed: {puppy.breed}</li>
                        <li>Status: {puppy.status}</li>
                    </ul>
                </div>

        </div>
    );
};

export default Singlepuppy;