import React from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';


class AccountRecipeCard extends React.Component {




    handleCustom = () => {
        this.props.setSelectedUserRecipe(this.props.recipe);
        this.props.toggleCustomRecipeModal();
    }

    handleRemove = () => {
        if (Object.hasOwn(this.props.recipe, '_id')) {
            this.props.removeCustomRecipe(this.props.recipe._id);
        } else {
            this.props.removeRecipe(this.props.recipe.recipeId);
        }
    }

    handleClick = () => { 
        this.props.setSelectedUserRecipe(this.props.recipe)
        this.getOneRecipe(this.props.recipe.recipeId);
        this.props.toggleAccountRecipeModal();

    }

    getOneRecipe = async (id) => {
        let config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/recipes/${id}`,
          headers: {
            "Authorization": `Bearer ${this.props.token}`
          }
        }
        let results = await axios (config);
        this.setState({
          selectedRecipe: results.data
        })
      } 


    render(){

        return (
        <Card
            style={{maxWidth: "18rem"}}
            className="m-1 d-inline-block"
            onClick={this.handleClick}
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

export default withAuth0(AccountRecipeCard);