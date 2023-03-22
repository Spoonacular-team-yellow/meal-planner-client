import React from "react";
import RecipeCard from "./RecipeCard";
import RecipeModal from './RecipeModal';
import './Results.css';

class Results extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <>
      <div className="results-div">

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
          />
          </>
        }
        </div>
      </>
    );
  }
}

export default Results;
