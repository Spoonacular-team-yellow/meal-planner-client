import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeModal from './RecipeModal';

class Results extends React.Component {
  
  render() {
    console.log(this.props.recipes)
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
                      getOneRecipe={this.props.getOneRecipe}
                    />
            })
          }
           <RecipeModal 
            showRecipeModal={this.props.showRecipeModal}
            toggleRecipeModal={this.props.toggleRecipeModal}
            selectedRecipe={this.props.selectedRecipe}
          />
          </>
        }
      </>
    );
  }
}

export default Results;
