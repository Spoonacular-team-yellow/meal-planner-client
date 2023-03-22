import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Button } from 'react-bootstrap';
//import { Route, Router, Routes } from 'react-router';
import Header from './Header';
import axios from 'axios';
import Footer from './Footer';
import Main from './Main';
import About from './About';
import LoginPage from './LoginPage';
import Account from './Account';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
// import Results from './Results';

import './App.css';


const SERVER = process.env.REACT_APP_SERVER;
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      doesUserExist: false
    };
  }

  updateRecipe = async (storeRecipe) => {
    try {
      let url = `${SERVER}/recipes/${storeRecipe.id}`;
      console.log(storeRecipe);
      let storedRecipeServer = await axios.put(url, storeRecipe)
      let updatedBooks = this.state.books.map((book) => {
        return book._id === storeRecipe._id
          ? storedRecipeServer.data
          : book;
      });
      this.setState({
        books: updatedBooks,
      })
    } catch (err) {
      console.log(`Error: ${err}`);
    }
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
  }

  checkUserExists = async () => {
    let email = this.props.auth0.user.email;
    let token = await this.getToken();
    console.log(token);
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
        // this.toggleRegisterModal();
        // console.log(this.state.showRegisterModal);
        console.log('hu');
      } else {
        this.setState({
          user: userExists,
          doesUserExist: true
        })
        console.log('hi');
      }
    } else {
      alert('User is not logged in');
    }
  }

  getToken = async () => {
    console.log('hi');
    if (this.props.auth0.isAuthenticated) {
      const response = await this.props.auth0.getIdTokenClaims();
      return response.__raw;
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.checkUserExists();
    console.log(this.state.user);
  }


  render() {
    console.log(this.state.user.data);
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={this.props.auth0.isAuthenticated ? <Main /> : <LoginPage />}
            >
            </Route>
            {this.props.auth0.isAuthenticated &&
              <>
                <Route
                  path="/about"
                  element={<About />} />
                <Route
                  path="/account"
                  element={<Account
                    data={this.state.user.data}
                    doesUserExist={this.state.doesUserExist}
                  />} />
              </>
            }
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
