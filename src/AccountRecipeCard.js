import React from "react";
import { Card, Button } from "react-bootstrap";

class AccountRecipeCard extends React.Component {
    handleCustom = () => {
        this.props.setSelectedUserRecipe(this.props.recipe);
        this.props.toggleCustomRecipeModal();
    }

    handleRemove = () => {
        this.props.removeRecipe(this.props.recipe.recipeId);
    }
    render(){

        return (
        <Card
            style={{maxWidth: "18rem"}}
            className="m-1 d-inline-block"
        >
            <Card.Img
              variant="top"
              src={this.props.recipe.imageUrl}
            />
            <Card.Body>
              <Card.Title>
                  {this.props.recipe.title}
                </Card.Title>
            </Card.Body>
            <Card.Footer>
                <Button onClick={this.handleCustom}>Customize Recipe</Button>
                <Button onClick={this.handleRemove}>Remove</Button>
            </Card.Footer>
        </Card>
        );
    };
};

export default AccountRecipeCard;