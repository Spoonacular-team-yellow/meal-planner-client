import React from "react";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";
// import Form from "react-bootstrap/Form";
// import { Badge } from "react-bootstrap";
import Search from "./Search";
import Results from "./Results";
import axios from "axios";


const SERVER = process.env.REACT_APP_SERVER;
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recipe: [],
    };
  }

  getRecipe = async (e) => {
    e.preventDefault();
    let searchData = [
      e.target.ing1.value,
      e.target.ing2.value,
      e.target.ing3.value
    ].toString();
    console.log(searchData)
    let results = await axios.get(`${SERVER}/recipes`,{ params: {ingredients: searchData} });
    console.log(results);
    this.setState({
      recipe: results.data
    });
    console.log(results.data);
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

  // ingredientHandler = (e) => {
  //   let value = e.target.ing1.value
  //   this.setState({

  //   });
  //   console.log(value)
  // }



  render() {
    return (
      <>
        <Search
          // ingredientHandler={this.ingredientHandler}
          getRecipe={this.getRecipe}
        />
        <Results />
      </>
    );
  }
}

export default Main;
