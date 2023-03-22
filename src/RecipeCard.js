import React from "react";
import Card from "react-bootstrap/Card";

class RecipeCard extends React.Component {

    handleClick = () => { 
        this.props.getOneRecipe(this.props.recipe.id);
        this.props.toggleRecipeModal();
        console.log(this.props.recipe.id,'here')


    }

    render(){

        return (
        <Card
            style={{maxWidth: "18rem", cursor: "pointer"}}
            className="m-1 d-inline-block"
            onClick={this.handleClick}
        >
            <Card.Img
              variant="top"
              src={this.props.recipe.image}
            />
            <Card.Body>
              <Card.Title>
                  {this.props.recipe.title}
                </Card.Title>
            </Card.Body>
        </Card>
        );
    };
};

export default RecipeCard;