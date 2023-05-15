import React from "react";

import { useContext, useEffect } from "react";
import PetContext from "../context/petsContextProvider";
import PetCard from "./PetCard";
import PetSearch from "../Pages/PetSearch";

const PetList = ({

  loading,
  filteredPets,
  resetFiltersHandler
  
}) => {
  console.log(filteredPets);

  const renderedPetsAll = filteredPets.map((pet) => {
    return <PetCard pet={pet} key={pet._id} />;
    
  });

  

  return (
    <>
    
    <div     className='cards'
>
{!loading && filteredPets.length === 0 ? ( <p>No matches for the chosen filters.</p>  ) : !loading ? (renderedPetsAll ) : <p>Loading...</p> }
        </div>
   
    
  

    </>
  );
};

export default PetList;
