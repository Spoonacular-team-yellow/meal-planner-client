import React from "react";
import RecipeCard from "./RecipeCard";

class Results extends React.Component {
  
  render() {
    
    return (
      <>
        { this.props.recipes &&
          <>
          {
            this.props.recipes.map((recipe, idx)=> {
              return <RecipeCard key={recipe._id} recipe={recipe} />
            })
          }
          </>
        }
      </>
    );
  }
}

export default Results;
