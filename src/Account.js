import React from "react";
import { Card } from "react-bootstrap";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      user: {},
      token: ''
    }
  }

  getUser = async () => {
    console.log(this.state.token);
    let email = this.props.auth0.user.email;
    let config = {
      method: 'get',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/accounts/${email}`,
      headers: {
        "Authorization": `Bearer ${this.state.token}`
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
      this.setState({
        token: response.__raw
      }, this.getUser);
      return response.__raw;
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.getToken();
  }

  render() {
    console.log(this.state.user);
    return (
      <>
      <h2>{this.state.user.username}</h2>
      <h2>Saved Recipes</h2>
      </>
    );
  }
}
export default withAuth0(Account);
