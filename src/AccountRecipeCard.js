import React from "react";
import { Card, Button, Badge} from "react-bootstrap";
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';
import { Trash } from 'react-bootstrap-icons';


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
            >
            <Card.Img
              variant="top"
              onClick={this.handleClick}
              src={this.props.recipe.imageUrl}
              style={{cursor: "pointer"}}
            />
            <Card.Body>
              <Card.Title>
                {Object.hasOwn(this.props.recipe, 'wasModified') &&
                    <Badge className="mb-3" pill bg="success">Custom Recipe</Badge>
                }
                <br />
                {this.props.recipe.title}
                </Card.Title>
                <div className="d-flex justify-content-between mt-4">
                    <Button onClick={this.handleCustom}>Customize</Button>
                    <Trash style={{cursor: "pointer"}} onClick={this.handleRemove} color="grey" size={35}/>
                </div>
            </Card.Body>
        </Card>
        );
    };
};

export default withAuth0(AccountRecipeCard);