import React, { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import PetContext from "../context/petsContextProvider";

function NavbarComp() {
  const { isLoggedIn, handleLogout } = useContext(PetContext);

  return (
    <Navbar id="nav" variant="dark" className="fixed-top nav_nav" expand="sm">
      <Container id="header">
        <Navbar.Brand>
          <Nav.Link as={Link} to="/" id="nav-link">
            <BsFillHouseHeartFill size={30} />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <NavDropdown
              title="Adopt"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/adoptionprocess">
                Adopting Rules/Process
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/foster">
                Foster
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/sheltersearch">
              Shelters
            </Nav.Link>

            <Nav className="ml-auto">
              {isLoggedIn ? (
                <>
                  <Nav.Link as={Link} to="/userprofile">
                    <RiAccountCircleLine size={20} />
                  </Nav.Link>
                  <Nav.Link as={Link} to="/" onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Sign up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComp;
