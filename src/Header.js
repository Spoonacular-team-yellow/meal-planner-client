import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap"
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>Meal Prep</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <LinkContainer to="/">
                <Nav.Link className="nav-link">Home</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            {this.props.auth0.isAuthenticated &&
              <>
                <Nav.Item>
                  <LinkContainer to="/about">
                    <Nav.Link className="nav-link">About Us</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                  <LinkContainer to="/account">
                    <Nav.Link className="nav-link">Account</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default withAuth0(Header);
