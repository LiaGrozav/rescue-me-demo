import React, { useState, useContext } from "react";
import PetContext from "../context/petsContextProvider";
// import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import axios from "axios";

axios.defaults.withCredentials = true;

function LoginPage() {
  const { user, setUser, handleLogin } = useContext(PetContext);

  // console.log(user);
  // console.log(user.user.favorites)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        { email, password }
      );
      // check if the response contains a token or some other form of authentication
      if (response.data.user) {
        // save the token in local storage for subsequent requests

        setUser(response.data.user);
        console.log(user);
        // console.log(response.data);
        handleLogin();

        // redirect the user to the dashboard or home page
        window.location.href = "/userprofile";
      } else {
        // display an error message to the user
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      // display an error message to the user
      setErrorMessage("Error occurred while logging in");
      console.error(error);
    }
  };

  return (
    <div className="form_container container_login">
      <img className="logo" src={""} alt="logo" />
      <Form className="form login-form" onSubmit={handleSubmitLogin}>
        <Form.Group controlId="formEmail" className="text-start">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="text-start">
          <Form.Label>Enter password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button type="submit" className="btn_lgr login-fix">
          Log in
        </Button>

        {errorMessage && <div className="text-danger">{errorMessage}</div>}

        <Form.Label>Log in with</Form.Label>

        <div className="icon-buttons">
          <Button variant="light" className="mr-2">
            <FaFacebook className="mr-2" />
          </Button>
          <Button variant="light">
            <FaGoogle className="mr-2" />
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default LoginPage;
