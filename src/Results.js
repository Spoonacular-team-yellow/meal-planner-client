import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeModal from './RecipeModal';

class Results extends React.Component {
  
  render() {
    return (
      <>
        { this.props.recipes &&
          <>
          {
            this.props.recipes.map((recipe, idx)=> {
              return <RecipeCard 
                      toggleRecipeModal={this.props.toggleRecipeModal} 
                      key={recipe.id} 
                      recipe={recipe}
                    />
            })
          }
           <RecipeModal 
            showRecipeModal={this.props.showRecipeModal}
            toggleRecipeModal={this.props.toggleRecipeModal}
            recipes={this.props.recipes}
            postRecipe={this.props.postRecipe}
          />
          </>
        }
      </>
    );
  }
}

export default Results;
