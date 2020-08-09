import React from "react";
import { Navbar } from "react-bootstrap";

const Header = () => (
  <>
    <Navbar bg="light">
      <Navbar.Brand href="/">
        <img src="/assets/presto.png" alt="presto" />
      </Navbar.Brand>
    </Navbar>
  </>
);

export default Header;
