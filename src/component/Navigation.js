import React from "react";
import logo from "../assets/dreamcatcher.png";
import { Navbar, Button } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #a0d85b;
    height: 20%;
    box-shadow: 5px 5px 7px rgba(3, 3, 3, 0.4);

    .logo {
      height: 3rem;
      margin: 0.5rem;
    }
  }

  .logOut {
    float: right;
    border: none;
    color: white;
    background-color: #a0d85b;
    font-size: 2.5rem;
    margin: 1rem;
  }
`;

const Navigation = () => {
  const LogOut = () => {
    localStorage.clear();
  };
  return (
    <React.Fragment>
      <Styles>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <img className="logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Link to="/">
            <Button className="logOut" onClick={LogOut}>
              <FaSignOutAlt />
            </Button>
          </Link>
        </Navbar>
      </Styles>
    </React.Fragment>
  );
};

export default Navigation;
