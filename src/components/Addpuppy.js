import React from 'react';

const Addpuppy = () => {
    return (
        <div>
            <form>
                <label for="name">Puppy Name:</label>
                <input type="text" id="name"></input>
                <label for="breed">Puppy Breed:</label>
                <input type="text" id="breed"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Addpuppy;