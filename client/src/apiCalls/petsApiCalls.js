/* import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import PetContext from "../context/petsContextProvider";

export const rdmPets = async () => {
  const {error,loading} = useContext(PetContext);
  try {
    const {data} = await axios.get("http://localhost:4000/api/pets/random");
    console.log(data);
  return data
  } 
  catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
} */