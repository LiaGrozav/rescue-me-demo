import React from "react";
import PetCard from "./PetCard";
import { useContext } from "react";
import PetContext from "../context/petsContextProvider";

export const MeetThemContainer = () => {
  const { randomPets } = useContext(PetContext);

  const renderedPetsRandom = randomPets.map((pet) => {
    return <PetCard rdmpet={pet} key={pet._id} />;
  });

  return <div className="cards-home">{renderedPetsRandom}</div>;
};

export default MeetThemContainer;
