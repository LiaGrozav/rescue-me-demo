import React from "react";
import { Row, Col, Button, Card, Form } from "react-bootstrap";

const ShelterSearch = () => {
  return (
    <div fluid className="cont-shelter">
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter country" />
              </Form.Group>
            </Col>
          </Row>
          <Col className="m-4">
            <Button className="btn_lgr" type="submit">
              Submit
            </Button>
          </Col>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ShelterSearch;
