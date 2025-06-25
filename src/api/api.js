export const createPuppy = async (playerObj) => {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(playerObj),
      }
    );
    const result = await response.json();
  } catch (error) {
    console.error("there was an error creating the new puppy", error);
  }
};

export const fetchAllPuppies = async (setPuppies) => {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players`
    );
    const { data } = await response.json();
    setPuppies(data.players);
  } catch (error) {
    console.error(error);
  }
};

export const fetchPuppy = async (id, setPuppy) => {
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

export const searchPuppies = async (setPuppies, searchValue) => {
  let returnPlayers = [];

  try {
    //fetch all the existing players and store as playerArr
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players/`
    );
    const result = await response.json();
    const playerArr = result.data.players;

    //look at each player, set their name to lowercase
    playerArr.map((player) => {
      let playerName = player.name.toLowerCase();
      //if the player's name includes the searchvalue typed in, push that player into a new array to return. continue loop
      if (playerName.includes(searchValue)) {
        returnPlayers.push(player);
      }
    });
    // finally, set the puppies to the new player array that only includes the search value
    setPuppies(returnPlayers);
  } catch (error) {
    console.error(error);
  }
};

export const deletePuppy = async (id) => {
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
