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

  removeRecipe = async (id) => {
    console.log(id);
    let email = this.props.auth0.user.email;
    let config = {
      method: 'put',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/accounts/list/remove/${email}`,
      data: {"id": id},
      headers: {
        "Authorization": `Bearer ${this.state.token}`
      }
    }
    await axios(config);
    let updatedRecipe = this.state.user.recipes.filter(recipe => recipe.recipeId !== id);
    let updatedUser = {
      username: this.state.user.username,
      email: this.state.user.email,
      _id: this.state.user._id,
      __v: this.state.user.__v,
      recipes: updatedRecipe
    }
    this.setState({
      user: updatedUser
    })
  };

  componentDidMount() {
    this.getToken();
  }

  render() {
    console.log(this.state.user);
    return (
      <>
      <h2>{this.state.user.username}</h2>
      <h2>Saved Recipes</h2>
      <Results 
        recipes={this.state.user.recipes}
        isUserList={true}
        toggleCustomRecipeModal={this.toggleCustomRecipeModal}
        showCustomRecipeModal={this.state.showCustomRecipeModal}
        setUserRecipe={this.setUserRecipe}
        selectedUserRecipe={this.state.selectedUserRecipe}
        removeRecipe={this.removeRecipe}
      />
      </>
    );
  }
}
export default withAuth0(Account);
