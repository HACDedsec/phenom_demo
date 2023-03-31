import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 37 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            class="Header_logo__core__AoIuo"
          >
            <path
              d="M23.236 0A13.254 13.254 0 0 0 10 13.234v20.092a2.848 2.848 0 0 0 5.494 1.109c.14-.353.207-.73.199-1.109v-9.215A13.233 13.233 0 1 0 23.236 0Zm0 20.776a7.543 7.543 0 1 1 7.542-7.542 7.55 7.55 0 0 1-7.542 7.542ZM21.369 40.068a18.784 18.784 0 0 1-17.044 0 2.945 2.945 0 0 0-4.17 3.541 2.943 2.943 0 0 0 1.508 1.71 24.663 24.663 0 0 0 22.368 0 2.944 2.944 0 1 0-2.662-5.252Z"
              fill="currentColor"
            ></path>
          </svg>
          <b>Phenom</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
