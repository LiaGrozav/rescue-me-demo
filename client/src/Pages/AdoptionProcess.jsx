import React from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import adoption from "../images/adoption_process.jpg";

const AdoptionProcess = () => {
  return (
    <div className='adop_proc_cont'>
      <div className='hero bg-image'>
       
        <img className="image"
        src={adoption} alt=""/>
      
 
      
 
      </div>
     

      <div className='cards_container'>
        <motion.Card
          initial={{ x: 2500 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <Card.Body className='ad_card first-card'>
            <Card.Title style={{ marginBottom: "20px" }}>
              Adoption Rules
            </Card.Title>
            <Card.Text>
              The first step to the adoption process is to understand the rules.
              
            </Card.Text>
            <Button className='btn_lgr '>Download File</Button>
          </Card.Body>
        </motion.Card>

        <motion.Card
          initial={{ x: 2500 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <Card.Body className='ad_card second-card'  >
            <Card.Title style={{ marginBottom: "20px" }}>
              Adoption Form
            </Card.Title>
            <Card.Text>
              After getting to know the rules, please fill in our adoption form
              by clicking the button below.
            </Card.Text>
            <Button className='btn_lgr'>Click Here</Button>
          </Card.Body>
        </motion.Card>

        <motion.Card
          initial={{ x: 2500 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Card.Body className='ad_card third-card'>
            <Card.Title  style={{ marginBottom: "20px" }}> And that's it!</Card.Title>
            <Card.Text>
              All you need to do now is lay back and wait for our response! We
              will contact you as soon as possible.
            </Card.Text>
          </Card.Body>
        </motion.Card>
      </div>
    </div>
  );
};

export default AdoptionProcess;
