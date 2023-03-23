import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import About from './About';
import LoginPage from './LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Account from './Account';
import axios from 'axios';


import './App.css';

class App extends React.Component {



  saveRecipe = async(recipe)=> {
    let token = await this.getToken();
    let recipeToSave = Object.hasOwn(recipe, '_id') ?
    {
      recipeId : recipe.recipeId,
      steps: recipe.steps,
      ingredients: recipe.ingredients,
      imageUrl: recipe.imageUrl,
      title: recipe.title,
      readyInMinutes: recipe.readyInMinutes,
      sourceUrl: recipe.sourceUrl,
      sourceName: recipe.sourceName,
      _id: recipe._id,
      __v: recipe.__v
    }
    :
    {
      recipeId : recipe.id,
      steps: recipe.analyzedInstructions,
      ingredients: recipe.extendedIngredients,
      imageUrl: recipe.image,
      title: recipe.title,
      readyInMinutes: recipe.readyInMinutes,
      sourceUrl: recipe.sourceUrl,
      sourceName: recipe.sourceName
    };
    let config = {
      method: 'put',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/accounts/list/save/${this.props.auth0.user.email}`,
      data: recipeToSave,
      headers: {
        "Authorization": `Bearer ${token}`
      }}
      let results = await axios(config);
      console.log(results.data)
  }


  getToken = async() => {
    if (this.props.auth0.isAuthenticated) {
      const response = await this.props.auth0.getIdTokenClaims();
      this.setState({
        token: response.__raw
      })
      return response.__raw;
    } else {
      return null;
    }
  }

  render() {

    return (
      <>
      <Router>
          <Header />
          <Routes>
          <Route 
              exact path="/"
              element={this.props.auth0.isAuthenticated ? <Main saveRecipe={this.saveRecipe} auth={this.props.auth0}/> : <LoginPage />}
            >
            </Route>
            <Route 
            path="/about"
            element={this.props.auth0.isAuthenticated ? <About/> : <LoginPage />}/>
             <Route 
            path="/account"
            element={this.props.auth0.isAuthenticated ? <Account saveRecipe={this.saveRecipe}/> : <LoginPage />}/>
            
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
