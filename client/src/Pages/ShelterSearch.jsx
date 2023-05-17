import React, { useState } from "react";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
import axios from "axios";

const ShelterSearch = () => {
  const [city, setCity] = useState("");
  const [shelters, setShelters] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleShelterSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/api/users/shelters?city=${city}`
      );

      setShelters(response.data.data.shelters);
    } catch (error) {
      setErrorMessage("Error occurred while retrieving shelters");
      console.error(error);
    }
  };

  return (
    <div fluid className="cont-shelter">
      <div className="card-shelter">
        <Card.Body>
          <Row>
            <Col>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Col className="m-4">
            <Button
              className="btn_lgr"
              type="submit"
              onClick={handleShelterSearch}
            >
              Submit
            </Button>
          </Col>
        </Card.Body>
      </div>

      <div className="show-shelters">
        <h3>Shelters:</h3>
        {shelters.map((shelter) => (
          <div key={shelter._id}>
            <p>Name: {shelter.name}</p>
            <p>City: {shelter.city}</p>
            <p>Email:{shelter.email}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShelterSearch;
