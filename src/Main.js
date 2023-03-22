import React from "react";
import Container from 'react-bootstrap/Container';
import Search from "./Search";
import Results from "./Results";
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';
import RegisterModal from './RegisterModal';



const SERVER = process.env.REACT_APP_SERVER;
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recipe: [],
      searchData: [],
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
    let url = `${SERVER}/${this.state.searchData.toString}`;
    let createdRecipe = await axios.post(url, newRecipe);
    this.setState({
      recipe: [...this.state.recipe, createdRecipe.data]
    })
  }

  deleteRecipe = async (id) => {
    let url = `${SERVER}/${this.state.searchData.toString}/${id}`;
    await axios.delete(url)
    let updatedRecipe = this.state.recipe.filter(temp => temp._id !== id);
    this.setState({
      recipe: updatedRecipe
    })
  }

  ingredientHandler = (e) => {
    e.preventDefault();
    this.setState({
      searchData: e.target.value
    });

  }

  createUser = async (username) => {
    let newUser = {
      username: username,
      email: this.props.auth0.user.email,
      recipes: []
    }
    console.log(newUser);
    let config = {
      method: 'post',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/accounts`,
      data: newUser,
      headers: {
        "Authorization": `Bearer ${this.state.token}`
      }
    };
    let createdUser = await axios(config);
    console.log('user created: ', createdUser)
  }

  checkUserExists= async() => {
    let email = this.props.auth0.user.email;
    let token = await this.getToken();
    if (token) {
      let config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/accounts/${email}`,
        headers: {
          "Authorization": `Bearer ${token}`
        }
      };
      let userExists = await axios(config);
      if (!userExists.data) {
        this.toggleRegisterModal();
      } else {
        this.setState({
          user: userExists
        })
      }
    } else {
      alert('User is not logged in');
    }
  }

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

  getToken = async() => {
    if (this.props.auth0.isAuthenticated) {
      const response = await this.props.auth0.getIdTokenClaims();
      this.setState({
        token: response.__raw
      });
      return response.__raw;
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.checkUserExists();
  }

  render() {

    return (
      <>
        <Container>
          <Search
            getRecipe={this.getRecipe}
          />
          <Results 
            toggleRecipeModal={this.toggleRecipeModal}
            showRecipeModal={this.state.showRecipeModal}
            recipes={this.state.recipe}
            selectedRecipe={this.state.selectedRecipe}
            getOneRecipe={this.getOneRecipe}
            saveRecipe={this.props.saveRecipe}
          />
          <RegisterModal
            showRegisterModal={this.state.showRegisterModal}
            createUser={this.createUser}
            toggleRegisterModal={this.toggleRegisterModal}
          />
        </Container>
      </>
    );
  }
}

export default withAuth0(Main);
