import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

class AccountRecipeCard extends React.Component {
    handleCustom = () => {
        this.props.setSelectedUserRecipe(this.props.recipe);
        this.props.toggleCustomRecipeModal();
    }

    handleRemove = () => {
        if (Object.hasOwn(this.props.recipe, '_id')) {
            this.props.removeCustomRecipe(this.props.recipe);
        } else {
            this.props.removeRecipe(this.props.recipe.recipeId);
        }
    }
    render(){
        console.log(this.props.recipe.wasModified);
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
                {Object.hasOwn(this.props.recipe, 'wasModified') &&
                    <Badge pill bg="success">Custom Recipe</Badge>
                }
                <br />
                {this.props.recipe.title}
                </Card.Title>
            </Card.Body>
            <Card.Footer>
                <Button onClick={this.handleCustom}>Customize</Button>
                <Button onClick={this.handleRemove}>Remove</Button>
            </Card.Footer>
        </Card>
        );
    };
};

export default AccountRecipeCard;