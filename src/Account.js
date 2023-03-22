import React from "react";
import { Card } from "react-bootstrap";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Results from './Results';
import data from './test.json';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      user: {},
      token: '',
      showCustomRecipeModal: false
    }
  }

  toggleCustomRecipeModal = () => {
    this.setState({
      showCustomRecipeModal: !this.state.showCustomRecipeModal
    });
  }

  getUser = async () => {
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
    let test_recipes = data;
    return (
      <>
      <h2>{this.state.user.username}</h2>
      <h2>Saved Recipes</h2>
      <Results 
        recipes={test_recipes}
        isUserList={true}
        toggleCustomRecipeModal={this.toggleCustomRecipeModal}
        showCustomRecipeModal={this.state.showCustomRecipeModal}
        setUserRecipe={this.setUserRecipe}
        selectedUserRecipe={this.state.selectedUserRecipe}
      />
      </>
    );
  }
}
export default withAuth0(Account);
