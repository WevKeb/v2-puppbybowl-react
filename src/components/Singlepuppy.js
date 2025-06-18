import React from 'react';
import { useParams } from 'react-router-dom';

const Singlepuppy = ({puppy}) => {
    const params = useParams();
    console.log(params);

    return (
        <div>
            <h2>This is the puppy:</h2>
            
                <div key={puppy.id}>
                    <ul>
                        <li>{puppy.name}</li>
                        <li>{puppy.breed}</li>
                        <li>{puppy.status}</li>
                    </ul>
                </div>

        </div>
    );
};

export default Singlepuppy;