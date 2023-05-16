import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import PetContext from "../context/petsContextProvider";

import axios from "axios";
const PetCard = ({ pet, rdmpet }) => {
  // console.log("rdmpet:", rdmpet);
  // conditional check to render the appropriate information in the PetCard component based on whether it's receiving pet or rdmpet prop
  const displayPet = rdmpet || pet;
  const [favorite, setFavorite] = useState(false);
  const { user, setUser } = useContext(PetContext);

  console.log("pet ->", displayPet._id);
  const FavHandler = async () => {
    if (!favorite) {
      try {
        const response = await axios.post(
          `http://localhost:4000/api/users/favorites`,
          {
            petId: displayPet._id,
          }
        );
        console.log(response);
        setUser(response.data);
        setFavorite(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const res = await axios.delete(
          `http://localhost:4000/api/users/favorites`,
          {
            data: {
              petId: displayPet._id,
            },
          }
        );
        console.log(res);
        setUser(res.data);
        setFavorite(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/users/getMe`
        );
        console.log(response);
        const favorites = response.data.data.user.favorites.map(
          (pet) => pet._id
        );

        setFavorite(favorites.includes(displayPet._id));
        console.log(favorite);
      } catch (error) {
        console.error(error);
      }
    };
    checkIfFavorite();
  }, [displayPet._id]);

  console.log(user);
  return (
    <Card className="card_petcard">
      <Card.Img variant="top" src="https://picsum.photos/id/40/200/150" />
      <Card.Body>
        <FaHeart
          className="heart"
          onClick={FavHandler}
          style={{
            color: favorite ? "#FFFFFF" : "black",
            fontSize: favorite ? "2rem" : "1.5rem",
          }}
        />
        <Link className="linkpet" to="/petprofile" state={displayPet}>
          <Card.Title>{displayPet.name}</Card.Title>
          {/* <Card.Text></Card.Text> */}
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PetCard;
