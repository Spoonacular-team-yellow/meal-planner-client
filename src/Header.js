import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { PersonCircle } from 'react-bootstrap-icons';

import './Header.css';

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:{}
    }
  }

  loggedUser = async () => {
    let email = this.props.auth0.user.email;
    let token = await this.getToken();
    let config = {
      method: 'get',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/accounts/${email}`,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    let result = await axios(config);
    this.setState({
      user: result.data[0]
    })
  }

  getToken = async() => {
    if (this.props.auth0.isAuthenticated) {
      const response = await this.props.auth0.getIdTokenClaims();
      return response.__raw;
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.loggedUser();
    console.log(this.state.user);
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>Grub Guide</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <LinkContainer to="/">
              <Nav.Link className="nav-link">Home</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/about">
              <Nav.Link className="nav-link">About Us</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item className="d-lg-none" style={{margin: "0 auto"}}>
              <LinkContainer to="/account">
              <Nav.Link className="nav-link"><div className="d-flex align-items-center" style={{gap:"0.8em"}}><PersonCircle size={20} /> <span>Hi {this.state.user.username}!</span></div></Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        <Nav.Item className="d-lg-flex d-none" style={{marginRight:"4em"}}>
            <LinkContainer to="/account">
            <Nav.Link className="nav-link"><div className="d-flex align-items-center justify-content-between" style={{gap:"0.8em"}}><PersonCircle size={20} /> <span>Hi {this.state.user.username}!</span></div></Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default withAuth0(Header);
