import React from "react";
import RecipeCard from "./RecipeCard";
import AccountRecipeCard from "./AccountRecipeCard";
import RecipeModal from './RecipeModal';
import CustomRecipeModal from './CustomRecipeModal';
import axios from 'axios';
import './Results.css';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUserRecipe: {}
    };
  }

  setSelectedUserRecipe = (recipe) => {
    this.setState({
      selectedUserRecipe: recipe
    });
  }

  handleCustomRecipe = async (updatedRecipe) => {
    let result = {};
    let config ={};
    console.log(updatedRecipe.wasModified, 'moo');
    if (Object.hasOwn(updatedRecipe, 'wasModified') && updatedRecipe.wasModified === true) {
      console.log('there');
      config = {
        method: 'put',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/customrecipes/${updatedRecipe._id}`,
        data: updatedRecipe,
        headers: {
          "Authorization": `Bearer ${this.props.token}`
        }
      }
      result = await axios(config);
    } else {
      updatedRecipe.wasModified = true;
      config = {
          method: 'post',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/customrecipes`,
          data: updatedRecipe,
          headers: {
            "Authorization": `Bearer ${this.props.token}`
          }
        }
        result = await axios(config);
    }
    this.props.saveRecipe(result.data);
    this.props.insertCustomRecipe(result.data);
  }

  componentDidMount() {
    this.setState({
      selectedUserRecipe: {}
    });
  }
  
  render() {
    return (
      <>
      <div className="results-div">

        { this.props.recipes &&
          <>
          {
            this.props.recipes.map((recipe, idx)=> {
              return this.props.isUserList ? 
                  <AccountRecipeCard 
                    key={idx}
                    recipe={recipe}
                    toggleCustomRecipeModal={this.props.toggleCustomRecipeModal}
                    setSelectedUserRecipe={this.setSelectedUserRecipe}
                    removeRecipe={this.props.removeRecipe}
                    removeCustomRecipe={this.props.removeCustomRecipe}
                  />
                  : <RecipeCard 
                      toggleRecipeModal={this.props.toggleRecipeModal}
                      key={idx} 
                      recipe={recipe}
                      getOneRecipe={this.props.getOneRecipe}
                    />
            })
          }
          {this.props.isUserList ?
          <CustomRecipeModal 
            showCustomRecipeModal={this.props.showCustomRecipeModal}
            toggleCustomRecipeModal={this.props.toggleCustomRecipeModal}
            selectedUserRecipe={this.state.selectedUserRecipe}
            handleCustomRecipe={this.handleCustomRecipe}
          />
          :
           <RecipeModal 
            showRecipeModal={this.props.showRecipeModal}
            toggleRecipeModal={this.props.toggleRecipeModal}
            selectedRecipe={this.props.selectedRecipe}
            saveRecipe={this.props.saveRecipe}
          />
          }
          </>
        }
        </div>
      </>
    );
  }
}

export default Results;
