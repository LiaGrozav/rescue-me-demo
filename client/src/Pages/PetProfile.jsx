import React from "react";
import { Container, Row, Carousel, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
/* import { useContext } from "react";
import PetContext from "../context/petsContextProvider"; */

//carousel with photos of the actual searched pet
//Pet name
//a favourite icon/button
//breed , city, country
//age size , gender ,color
//shelter
//paragraph with description
// adopt me button

const PetProfile = () => {
  const { state } = useLocation();
  const pet = state;
  console.log(pet);
  return (
    <div className="petProfile_cont">
      <Container className="petProfile">
        <Row>
          <Carousel className="carousel-pet">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/id/200/300"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/id/200/300"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/id/200/300"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <Container className="pet_text_info">
        <div className="pet_titles_info">
          <h2>{pet.name}</h2>
          <h4>
            {pet.breed} | {pet.size} | City | Country
          </h4>
          <h4>SHELTER</h4>
         
            <Button className="btn_lgr"  href={"/adoptionprocess"}>Adopt me</Button>
 
        </div>
        <div className="pet_description_info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            laboriosam quisquam asperiores! Sed similique consequuntur ipsam
            ducimus aut, deserunt quam sapiente illo beatae nobis, odio ut
            facere animi at ipsum nisi pariatur. Ullam est quis repellendus!
            Facere dolorem asperiores suscipit. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Possimus laboriosam quisquam
            asperiores! Sed similique consequuntur ipsam ducimus aut, deserunt
            quam sapiente illo beatae nobis, odio ut facere animi at ipsum nisi
            pariatur. Ullam est quis repellendus! Facere dolorem asperiores
            suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Possimus laboriosam quisquam asperiores! Sed similique consequuntur
            ipsam ducimus aut, deserunt quam sapiente illo beatae nobis, odio ut
            facere animi at ipsum nisi pariatur. Ullam est quis repellendus!
            Facere dolorem asperiores suscipit. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Possimus laboriosam quisquam
            asperiores! Sed similique consequuntur ipsam ducimus aut, deserunt
            quam sapiente illo beatae nobis, odio ut facere animi at ipsum nisi
            pariatur. Ullam est quis repellendus! Facere dolorem asperiores
            suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Possimus laboriosam quisquam asperiores! Sed similique consequuntur
            ipsam ducimus aut, deserunt quam sapiente illo beatae nobis, odio ut
            facere animi at ipsum nisi pariatur. Ullam est quis repellendus!
            Facere dolorem asperiores suscipit.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PetProfile;