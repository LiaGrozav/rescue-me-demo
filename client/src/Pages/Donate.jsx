import React from "react";
import { Row, Col, Button, Card, Container } from "react-bootstrap";
const Donate = () => {
  return (
    <Container className="cont_donate">
      <Row>
        <Col>
          <div className="banner_donate bg-primary text-white rounded">
            <h1>DONATE WITH PICS</h1>
          </div>
          <div className="but-one">
            <Button block className="my-3 mx-2 btn_lgr">
              One Time
            </Button>
            <Button block className="my-3 mx-2 btn_lgr">
              Monthly
            </Button>
            <Button block className="my-3 mx-2 btn_lgr">
              $10
            </Button>
            <Button block className="my-3 mx-2 btn_lgr">
              $50
            </Button>
            <Button block className="my-3 mx-2 btn_lgr">
              Other amount
            </Button>
          </div>
          <Card>
            <Card.Body className="banner-two">
              <p>Choose preferred payment method:</p>
              <div className="but-two">
                <Button className="mr-2 my-2 mx-2 btn_lgr">Paypal</Button>
                <Button className="mr-2 my-2 mx-2 btn_lgr">Card</Button>
                <Button className="mr-2 my-2 mx-2 btn_lgr">Bank Account</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Donate;
