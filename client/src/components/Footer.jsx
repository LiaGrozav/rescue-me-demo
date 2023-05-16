import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsFillShareFill } from "react-icons/bs";

const Footer = () => {
  return (
    <Container
      fluid
      className="footer d-flex align-items-center justify-content-center"
    >
      <Row>
        <Col xs={12} md={6} className="text-center">
          <Nav className="justify-content-center justify-content-md-start pt-1">
            <Nav.Item>
              <Nav.Link as={Link} to={"/contact"} id="nav-link">
                Contact us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" id="nav-link">
                Imprint
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" id="nav-link">
                TOC's
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={12} md={6} className="text-center">

          <Nav className="justify-content-center justify-content-md-end pb-1">
            <Nav.Item>
              <Nav.Link href="#" id="nav-link">
                <BsInstagram size={20} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" id="nav-link">
                <BsFacebook size={20} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" id="nav-link">
                <BsFillShareFill size={20} />
              </Nav.Link>

            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
