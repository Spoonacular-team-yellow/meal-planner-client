import React from "react";
import Container from 'react-bootstrap/Container';
import Search from "./Search";
import Results from "./Results";
// import App from "./App";
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';
import RegisterModal from './RegisterModal';
import LogoutButton from "./LogoutButton";
//import { createHashRouter } from "react-router-dom";


const SERVER = process.env.REACT_APP_SERVER;
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recipe: [],
      searchData: [],
      addRecipe: [],
      showRegisterModal: false,
      showRecipeModal: false,
      user: {},
      token:'',
      selectedRecipe: {},
    };
  }
  getOneRecipe = async (id) => {
    let config = {
      method: 'get',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/recipes/${id}`,
      headers: {
        "Authorization": `Bearer ${this.state.token}`
      }
    }
    let results = await axios (config);
    this.setState({
      selectedRecipe: results.data
    })
  } 

  saveRecipe = async(recipe)=> {
    console.log(recipe, "recipe")
    let config = {
      method: 'post',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/accounts/list/save${recipe.id}`,
      params: {
        ingredients: recipe
      },
      headers: {
        "Authorization": `Bearer ${this.state.token}`
      }}
      let results = await axios(config);
      
    }
  



  getRecipe = async (e) => {
    e.preventDefault();
    let searchData = [
      e.target.ing1.value,
      e.target.ing2.value,
      e.target.ing3.value
    ].toString();
    let config = {
      method: 'get',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/recipes`,
      params: {
        ingredients: searchData
      },
      headers: {
        "Authorization": `Bearer ${this.state.token}`
      }
    };
    let results = await axios(config);
    this.setState({
      recipe: results.data
    });
  }

  postRecipe = async (newRecipe) => {
    let url = `${SERVER}/${this.state.searchData}`;
    let createdRecipe = await axios.put(url, newRecipe);
    this.setState({
      addRecipe: [...this.state.recipe, createdRecipe.data]
    })
  }

  deleteRecipe = async (id) => {
    let url = `${SERVER}/${this.state.searchData}/${id}`;
    await axios.delete(url)
    let updatedRecipe = this.state.recipe.filter(temp => temp._id !== id);
    this.setState({
      addRecipe: updatedRecipe
    })
  }

  ingredientHandler = (e) => {
    e.preventDefault();
    this.setState({
      searchData: e.target.value
    });
    console.log(e.target.value)
  }

  createUser = async (username) => {
    let newUser = {
      username: username,
      email: this.props.auth0.user.email,
      recipes: []
    }
    let createdUser = await axios.post(`${process.env.REACT_APP_SERVER}/accounts`, newUser);
    this.setState({
      user: createdUser
    });
    console.log(createdUser);
  }

  // checkUserExists= async() => {
  //   let email = this.props.auth0.user.email;
  //   let token = await this.getToken();
  //   if (token) {
  //     let config = {
  //       method: 'get',
  //       baseURL: process.env.REACT_APP_SERVER,
  //       url: `/accounts/${email}`,
  //       headers: {
  //         "Authorization": `Bearer ${token}`
  //       }
  //     };
  //     let userExists = await axios(config);
  //     if (!userExists.data) {
  //       this.toggleRegisterModal();
  //       console.log(this.state.showRegisterModal);
  //     } else {
  //       this.setState({
  //         user: userExists
  //       })
  //     }
  //   } else {
  //     alert('User is not logged in');
  //   }
  // }
  
  // getToken = async() => {
  //   if (this.props.auth0.isAuthenticated) {
  //     const response = await this.props.auth0.getIdTokenClaims();
  //     return response.__raw;
  //   } else {
  //     return null;
  //   }
  // }
  toggleRegisterModal = () => {
    this.setState({
      showRegisterModal: !this.state.showRegisterModal
    });
  }

  toggleRecipeModal = () => {
    this.setState({
      showRecipeModal: !this.state.showRecipeModal
    })
  }
  



  render() {
    return (
      <>
      {/* <App/> */}
        <Search
          // ingredientHandler={this.ingredientHandler}
          getRecipe={this.getRecipe}
        />
        <Results 
          toggleRecipeModal={this.toggleRecipeModal}
          showRecipeModal={this.state.showRecipeModal}
          recipes={this.state.recipe}
          postRecipe={this.postRecipe}
        />
        <RegisterModal
          showRegisterModal={this.state.showRegisterModal}
          createUser={this.createUser}
          toggleRegisterModal={this.toggleRegisterModal}
        />
        <LogoutButton>LogOut</LogoutButton>
      </>
    );
  }
}

export default withAuth0(Main);
