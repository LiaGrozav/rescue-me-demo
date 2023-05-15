import React from "react";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
// import axios from "axios";
const ShelterSearch = () => {


  // const handleShelterSearch = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:4000/api/users/shelters",
       
  //     );
  //     // check if the response contains a token or some other form of authentication
  //     if (response.data.user) {
  //       // save the token in local storage for subsequent requests

  //       setUser(response.data.user);
  //       console.log(user);
  //       // console.log(response.data);
  //       handleLogin();

  //       // redirect the user to the dashboard or home page
  //       window.location.href = "/userprofile";
  //     } else {
  //       // display an error message to the user
  //       setErrorMessage("Invalid email or password");
  //     }
  //   } catch (error) {
  //     // display an error message to the user
  //     setErrorMessage("Error occurred while logging in");
  //     console.error(error);
  //   }
  // };
  return (
    <div fluid className="cont-shelter">
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" /* value={city}
            onChange={handleEmailChange} */ />
              </Form.Group>
            </Col>
            
          </Row>
          <Col className="m-4">
            <Button className="btn_lgr" type="submit"> {/* onSubmit={handleSubmit} */}
              Submit
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ShelterSearch;
