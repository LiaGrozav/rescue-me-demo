import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Player } from "@lottiefiles/react-lottie-player";

const Foster = () => {
  return (
    <div className="foster-container">
      <h1>Fostering a pet</h1>
      
      <Row className="foster-text" md={15}>
        <Col>
          <p>
            Fostering a pet is a rewarding experience that allows you to provide
            a temporary home for an animal in need. By becoming a foster parent,
            you are making a significant difference in the life of a pet and
            helping to prepare them for their forever home.
          </p>
          <Player
            src="https://assets7.lottiefiles.com/packages/lf20_5JFpAw.json"
            className="player"
            loop
            autoplay
          ></Player>
          <p>
            Our fostering program is an essential part of our pet adoption
            process. It provides a safe and nurturing environment for animals
            who may need extra care and attention before they can be adopted.
            Fostering also helps to alleviate overcrowding in shelters and
            rescues, which allows more animals to be saved.
          </p>
          <Player
            src="https://assets7.lottiefiles.com/packages/lf20_dopee6e0.json"
            className="player"
            loop
            autoplay
          ></Player>
          <p>
            If you're interested in becoming a foster parent, please fill out
            our foster application. However, keep in mind that fostering a pet
            is a commitment as much as adopting one. We look forward to
            welcoming you to our fostering community and making a difference in
            the lives of animals together.
          </p>
        </Col>
        <Col>
          <div className="form_container">
            <h2>Please fill in this form</h2>
            <Form className="form">
              <Form.Group controlId="formGridFirstN" className="text-start">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  placeholder="First Name"
                  className="form-control"
                />
              </Form.Group>

              <Form.Group controlId="formGridLastN" className="text-start">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  placeholder="Last Name"
                  className="form-control"
                />
              </Form.Group>

              <Form.Group controlId="formGridHPhone" className="text-start">
                <Form.Label>Home phone</Form.Label>
                <Form.Control
                  type="tel"
                  className="form-control"
                  id="telephone"
                  placeholder="(+49) 555 5555555"
                />
              </Form.Group>

              <Form.Group controlId="formGridMobile" className="text-start">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="tel"
                  className="form-control"
                  id="mobile"
                  placeholder="(+49) 555 5555555"
                />
              </Form.Group>

              <Form.Group controlId="formGridEmail" className="text-start">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formGridBirth" className="text-start">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" className="form-control" />
              </Form.Group>

              <Form.Group controlId="formGridAddress" className="text-start">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="1234 Straße"
                  className="form-control"
                />
              </Form.Group>

              <Form.Group controlId="formGridCity" className="text-start">
                <Form.Label>City</Form.Label>
                <Form.Control className="form-control" />
              </Form.Group>

              <Form.Group controlId="formGridState" className="text-start">
                <Form.Label>State</Form.Label>
                <Form.Control className="form-control" />
              </Form.Group>

              <Form.Group controlId="formGridZip" className="text-start">
                <Form.Label>Zip</Form.Label>
                <Form.Control className="form-control" />
              </Form.Group>
              <div id="button" className="d-flex justify-content-center">
                <Button className="btn_lgr login-fix" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Foster;
