import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import { Button } from 'react-bootstrap';
//import { Route, Router, Routes } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Results from './Results';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
      
      <Router>
          <Header />
          <Routes>
          <Route 
              exact path="/"
              element={<Main/>}
            >
            </Route>
            <Route 
            exact path="/About"
            element={<About/>}/>
            
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
