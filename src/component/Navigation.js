import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  const LogOut = () => {
    localStorage.clear();
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Weeber</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Link to="/">
        <Button onClick={LogOut}>Cerrar sesión</Button>
      </Link>
    </Navbar>
  );
};

export default Navigation;
