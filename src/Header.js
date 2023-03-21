import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="">
        <Navbar.Brand>Meal Prep</Navbar.Brand>
        <NavItem to="/" className="nav-link">Home </NavItem>
        <NavItem to="/about" className="nav-link"> About Us</NavItem>
      </Navbar>
    )
  }
}

export default Header;
