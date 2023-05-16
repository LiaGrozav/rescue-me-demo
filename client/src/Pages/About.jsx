import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";

const About = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/53261/pexels-photo-53261.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image 1",
      caption: "Caption 1",
    },
    {
      src: "https://images.pexels.com/photos/663573/pexels-photo-663573.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Image 2",
      caption: "Caption 2",
    },
  ];
  return (
    <div className="about-container">
      <Row className="about-h1">
        <div>
          <h1>About us</h1>
        </div>
      </Row>
      <Row id="row">
        <Col xs={12} md={6} id="col">
          <h2>Welcome!</h2>
          <p>
            Welcome to our pet adoption website. We are a passionate group of
            animal lovers dedicated to finding loving homes for pets in need.
            Our mission is to make the adoption process easy and enjoyable for
            both the pet and the adopter.
          </p>
          <p>
            Our team has years of experience in animal rescue and adoption. We
            understand the importance of matching the right pet with the right
            family, and we take pride in providing personalized attention to
            each and every adoption.
          </p>
          <p>
            We work with reputable animal shelters and rescue organizations to
            provide a safe and healthy environment for our pets. Our team of
            volunteers works tirelessly to ensure that our animals receive the
            care and attention they need to thrive.
          </p>
          <p>
            We believe that every pet deserves a loving home, and we are
            committed to making that happen. Whether you're looking for a
            playful kitten or a loyal companion, we have a variety of pets
            available for adoption.
          </p>
          <p>
            Thank you for considering adoption and for visiting our website. We
            hope that you find your perfect pet and become a part of our
            adoption community.
          </p>
        </Col>
        <Col xs={12} md={6} id="img-column">
          <Carousel fade id="carousel">
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  mx-auto
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                />
                <Carousel.Caption>
           
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default About;
