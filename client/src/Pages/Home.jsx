import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import FactsCarousel from "../components/FactsCarousel";
import MeetThemContainer from "../components/MeetThemContainer";
import homepage from "../images/homepage.jpg"


const Home = () => {
  return (
    <Container fluid className="cont">
      <Col>
        <Row className="first-block-home">
          <Col className="first-block-text">
            <h1>Welcome to Rescue Me!</h1>
            <p>Adopting a pet can bring so much joy and love into your life.</p>
            <p>
              There are countless pets in shelters waiting for their forever
              homes.
            </p>
            <p>Give a homeless pet a chance at happiness by adopting today.</p>
          </Col>
          <Col className="image-container">
       
            <Image
              src={homepage} alt="My Image"
              className="img-home"
            ></Image>
          </Col>
        </Row>
        <Row>
          <Col className="second-block-home">
            <h2>Pets available for adoption</h2>
            <Row>
              <Col className="meet_them">
                <MeetThemContainer />
                <div className="div-btn-lgr">      
                   <Button className="btn_lgr" href={"/petsearch"}>
                  Check more
                </Button></div>
         
              </Col>
            </Row>
          </Col>
        </Row>
        <FactsCarousel />
      </Col>
    </Container>
  );
};

export default Home;
