import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Results from './Results';
import './Account.css'


class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      user: {},
      token: '',
      showCustomRecipeModal: false
    };
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

  removeCustomRecipe = async (id) => {
    let email = this.props.auth0.user.email;
    let config = {
      method: 'put',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/accounts/list/remove/${email}`,
      data: {"_id": id},
      headers: {
        "Authorization": `Bearer ${this.state.token}`
      }
    }
    let response = await axios(config);

    let config2 = {
      method: 'delete',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/customrecipes/${id}`,
      headers: {
        "Authorization": `Bearer ${this.state.token}`
      }
    }
    await axios(config2);
    this.removeCustomRecipeFromUser(response.data);
  }

  removeCustomRecipeFromUser = (customRecipe) => {
    let index = this.state.user.recipes.findIndex(recipe => recipe._id === customRecipe._id);
    console.log(customRecipe._id);
    console.log(this.state.user.recipes);
    let updatedUser = {...this.state.user};
    if (index >= 0) {
      console.log(this.state.user.recipes);
      let updatedRecipes = this.state.user.recipes.filter((recipe) => {
        if (Object.hasOwn(recipe, '_id')) {
          console.log(recipe._id + ' ' + customRecipe._id);
          let ternary = recipe._id === customRecipe._id ? false : recipe;
          console.log(ternary);
          return ternary;
        } else {
          return recipe;
        }
      });
      console.log(updatedRecipes);
      updatedUser.recipes = updatedRecipes;
      this.setState({
        user: updatedUser
      })
    }
  }

  insertCustomRecipe = (customRecipe, modified) => {
    let index = this.state.user.recipes.findIndex(recipe => recipe._id === customRecipe._id);
    let updatedUser = {...this.state.user};
    if (index > 0) {
      updatedUser.recipes[index] = customRecipe;
      this.setState({
        user: updatedUser
      });
    } else {
      updatedUser.recipes.push(customRecipe);
      this.setState({
        user: updatedUser
      })
    }
  }

  componentDidMount() {
    this.getToken();
  }

  render() {

    return (
      <>
      <h2 className="username">{this.state.user.username}</h2>
      <h2 className="srecipe">Saved Recipes</h2>
      <Results 
        fromAccount={true}
        recipes={this.state.user.recipes}
        isUserList={true}
        toggleCustomRecipeModal={this.toggleCustomRecipeModal}
        showCustomRecipeModal={this.state.showCustomRecipeModal}
        setUserRecipe={this.setUserRecipe}
        selectedUserRecipe={this.state.selectedUserRecipe}
        removeRecipe={this.removeRecipe}
        removeCustomRecipe={this.removeCustomRecipe}
        saveRecipe={this.props.saveRecipe}
        insertCustomRecipe={this.insertCustomRecipe}
        token={this.state.token}
      />
      </>
    );
  }
}
export default withAuth0(Account);
