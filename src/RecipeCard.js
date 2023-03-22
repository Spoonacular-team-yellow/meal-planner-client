import React from "react";
import Card from "react-bootstrap/Card";

class RecipeCard extends React.Component {

    render(){

        return (
        <Card
            style={{maxWidth: "18rem", cursor: "pointer"}}
            className="m-1 d-inline-block card"
            onClick={this.props.toggleRecipeModal}
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