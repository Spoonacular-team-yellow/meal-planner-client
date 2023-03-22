import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import { Button } from 'react-bootstrap';
//import { Route, Router, Routes } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import About from './About';
import LoginPage from './LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
// import Results from './Results';

import './App.css';

class App extends React.Component {
  render() {
    // console.log(this.props);
    console.log(process.env.REACT_APP_AUTH0_DOMAIN)

    return (
      <>
      <Router>
          <Header />
          <Routes>
          <Route 
              exact path="/"
              element={this.props.auth0.isAuthenticated ? <Main/> : <LoginPage />}
            >
            </Route>
            <Route 
            path="/about"
            element={<About/>}/>
            
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
