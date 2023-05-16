import React from "react";
import { Card, Button } from "react-bootstrap";

const AdoptionProcess = () => {
  return (
    <div className="adop_proc_cont">
      <div
        className="hero p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5709566/pexels-photo-5709566.jpeg?auto=compress&cs=tinysrgb&w=600')",
          height: 400,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Adoption Rules and Process</h1>
              {/* <h4 className="mb-3">Subheading</h4> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="background-container">
        <div className="title_banner">
          <h1>Adopting Process</h1>
          <h2>Step by Step Application</h2>
        </div>
        <img
          className="image"
          src="https://images.pexels.com/photos/5709566/pexels-photo-5709566.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div> */}

      <div className="cards_container">
        <Card>
          <Card.Body className="ad_card">
            <Card.Title>Adoption Rules</Card.Title>
            <Card.Text>
              The first step to the adoption process is to understand the rules.
              Please click the button below, and download the file with all the
              information you need.
            </Card.Text>
            <Button className="btn_cont">Download File</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body className="ad_card">
            <Card.Title>Adoption Form</Card.Title>
            <Card.Text>
              After getting to know the rules, please fill in our adoption form
              by clicking the button below.
            </Card.Text>
            <Button className="btn_cont">Click Here</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body className="ad_card_thatsit">
            <Card.Title> And that's it!</Card.Title>
            <Card.Text>
              All you need to do now is lay back and wait for our response! We
              will contact you as soon as possible.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AdoptionProcess;
