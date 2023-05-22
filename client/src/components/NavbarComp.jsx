import React, { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BsFillHouseHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import PetContext from "../context/petsContextProvider";
import { motion } from "framer-motion";

function NavbarComp() {
  const { isLoggedIn, handleLogout } = useContext(PetContext);

  const navLinkVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  


  return (
    <Navbar id="nav" variant="dark" className="fixed-top nav_nav" expand="sm">
      <Container id="header">
        <Navbar.Brand>
          <Nav.Link as={Link} to="/" className="nav-link">
            <BsFillHouseHeartFill size={30} />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <Nav.Link as={Link} to="/petsearch" id="nav-link">
                Search
              </Nav.Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <Nav.Link as={Link} to="/about" id="nav-link">
                About
              </Nav.Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <NavDropdown
                title="Adopt"
                id="collapsible-nav-dropdown"
                id="nav-link"
              >
                <NavDropdown.Item as={Link} to="/adoptionprocess" id="nav-link">
                  Adopting Rules/Process
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/foster" id="nav-link">
                  Foster
                </NavDropdown.Item>
              </NavDropdown>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <Nav.Link as={Link} to="/sheltersearch" id="nav-link">
                Shelters
              </Nav.Link>
            </motion.div>
            <Nav className="ml-auto">
              {isLoggedIn ? (
                <>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={navLinkVariants}
                    transition={{ delay: 0.6, duration: 0.7 }}
                  >
                    <Nav.Link as={Link} to="/userprofile" id="nav-link">
                      <RiAccountCircleLine size={20} />
                    </Nav.Link>{" "}
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={navLinkVariants}
                    transition={{ delay: 0.7, duration: 0.7 }}
                  >
                    <Nav.Link
                      as={Link}
                      to="/"
                      onClick={handleLogout}
                      id="nav-link"
                    >
                      Logout
                    </Nav.Link>
                  </motion.div>
                </>
              ) : (
                <>
                  {" "}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={navLinkVariants}
                    transition={{ delay: 0.8, duration: 0.7 }}
                  >
                    <Nav.Link as={Link} to="/login" id="nav-link">
                      Login
                    </Nav.Link>{" "}
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={navLinkVariants}
                    transition={{ delay: 0.9, duration: 0.7 }}
                  >
                    <Nav.Link as={Link} to="/signup" id="nav-link">
                      Sign up
                    </Nav.Link>
                  </motion.div>
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
