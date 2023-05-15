import React, { useState, useContext } from "react";
import PetContext from "../context/petsContextProvider";
import "../styles/GiveForAdoptionForm.scss";
import { Container, Form, Button } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";

const petSize = [
  { value: "small", label: "small" },
  { value: "medium", label: "medium" },
  { value: "big", label: "big" },
];
const petType = [
  { value: "cat", label: "cat" },
  { value: "dog", label: "dog" },
  { value: "other", label: "other" },
];

const petGender = [
  { value: "female", label: "female" },
  { value: "male", label: "male" },
];

const petVaccinated = [
  { value: "yes", label: "yes" },
  { value: "no", label: "no" },
];

const petSterilized = [
  { value: "yes", label: "yes" },
  { value: "no", label: "no" },
];

const petGoodWith = [
  { value: "kids", label: "kids" },
  { value: "dogs", label: "dogs" },
  { value: "cats", label: "cats" },
];

const GiveForAdoptionForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");
  const [goodWith, setGoodWith] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // errorMessage is defined to store any error message that may occur during the sign-up process
  const [sterilized, setSterilized] = useState("");
  const [vaccinated, setVaccinated] = useState("false");
  const { user } = useContext(PetContext);

  axios.defaults.withCredentials = true;
  console.log(user);

  const handleSubmitGiveForAdoptionForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/pets", {
        user: user._id,
        vaccinated,
        sterilized,
        name,
        type,
        breed,
        age,
        size,
        gender,
        color,
        location,
        goodWith,
        description,
      });

      setErrorMessage("");
      alert(
        "Thank you for your trust! We hope to find a home for your pet soon!"
      );
    } catch (error) {
      console.error(error);
      setErrorMessage("Please check your inputs and try again");
      alert("Please check your inputs and try again");
    }
  };

  return (
    <Container className="container-form">
      <Form
        onSubmit={handleSubmitGiveForAdoptionForm}
        className="give-for-adoption-form"
      >
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <input
            type="text"
            placeholder="Enter pet's name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Type of pet</Form.Label>
          <Select
            className="custom-select"
            options={petType}
            placeholder="Select type of pet"
            onChange={(event) => setType(event.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Breed</Form.Label>
          <input
            type="text"
            placeholder="Enter breed"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Age</Form.Label>
          <input
            type="text"
            placeholder="Enter Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Size</Form.Label>
          <Select
            className="custom-select"

            options={petSize}
            placeholder="Select size"
            onChange={(event) => setSize(event.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Select
            className="custom-select"
            options={petGender}
            placeholder="Select gender"
            onChange={(event) => setGender(event.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Color</Form.Label>
          <input
            type="text"
            placeholder="Enter color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Current location</Form.Label>
          <input
            type="text"
            placeholder="Enter pet's current location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Good with ...</Form.Label>
            className="custom-select"
            options={petGoodWith}
            placeholder="Select size"
            onChange={(event) => setGoodWith(event.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Vaccinated</Form.Label>
          <Select
            className="custom-select"
            options={petVaccinated}
            placeholder="Vaccinated"
            onChange={(event) => setVaccinated(event.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Sterilized</Form.Label>
          <Select
            className="custom-select"
            options={petSterilized}
            placeholder="Sterilized"
            onChange={(event) => setSterilized(event.value)}
          />
        </Form.Group>

        <div>
          <Button variant="light" type="submit" className="submit-button-form">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default GiveForAdoptionForm;
