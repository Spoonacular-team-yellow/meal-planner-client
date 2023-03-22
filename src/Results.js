import React from "react";
import RecipeCard from "./RecipeCard";
import AccountRecipeCard from "./AccountRecipeCard";
import RecipeModal from './RecipeModal';
import CustomRecipeModal from './CustomRecipeModal';
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
                    key={recipe.id}
                    recipe={recipe}
                    toggleCustomRecipeModal={this.props.toggleCustomRecipeModal}
                    setSelectedUserRecipe={this.setSelectedUserRecipe}
                  />
                  : <RecipeCard 
                      toggleRecipeModal={this.props.toggleRecipeModal}
                      key={recipe.id} 
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
