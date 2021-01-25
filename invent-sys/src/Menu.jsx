import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Menu = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">Inventory System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact to="/" >
              <Nav.Link href="#create" >Create</Nav.Link>
            </NavLink>

            <NavLink exact to="/read">
            <Nav.Link href="#read">Read</Nav.Link>
            </NavLink>

            <NavLink exact to="/update" >
            <Nav.Link href="#update">Update</Nav.Link>
            </NavLink>

            <NavLink exact to="/delete">
            <Nav.Link href="#delete">Delete</Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  );
}
export default Menu;