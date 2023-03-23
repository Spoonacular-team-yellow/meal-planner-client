import React from 'react';
import { Modal, Form, Button} from 'react-bootstrap';

class CustomRecipeModal extends React.Component {

handleCustomChanges = (e) => {
    e.preventDefault();
    let ingredients_input = document.querySelectorAll(".customModal-Form input[name='ingredient']");
    let recipe_ingredients = [];
    ingredients_input.forEach(input => recipe_ingredients.push(input.value));

    let steps_input = document.querySelectorAll(".customModal-Form input[name='step']");
    let recipe_steps = [];
    steps_input.forEach(input => recipe_steps.push(input.value));

    let newCustomRecipe = {
        recipeId: this.props.selectedUserRecipe.recipeId,
        steps: recipe_steps,
        ingredients: recipe_ingredients, 
        imageUrl: e.target.imageUrl.value,
        title: e.target.title.value,
        readyInMinutes: this.props.selectedUserRecipe.readyInMinutes,
        sourceUrl: this.props.selectedUserRecipe.sourceUrl,
        sourceName: this.props.selectedUserRecipe.sourceName,
        wasModified: this.props.selectedUserRecipe.wasModified || false
    };
    if (Object.hasOwn(this.props.selectedUserRecipe, '_id')) {
        newCustomRecipe._id = this.props.selectedUserRecipe._id;
        newCustomRecipe.__v = this.props.selectedUserRecipe.__v;
    }
    this.props.handleCustomRecipe(newCustomRecipe);
    this.props.toggleCustomRecipeModal();
}

    render() {
        return(
            <>
            {Object.keys(this.props.selectedUserRecipe).length > 0 &&
            <Modal show={this.props.showCustomRecipeModal} onHide={this.props.toggleCustomRecipeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Customize Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="customModal-Form" onSubmit={this.handleCustomChanges}>
                        <Form.Group controlId="title" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.selectedUserRecipe.title}/>
                        </Form.Group>
                        <Form.Group controlId="ingredients" >
                            <Form.Label>Ingredients</Form.Label>
                           {this.props.selectedUserRecipe.ingredients && 
                           Object.hasOwn(this.props.selectedUserRecipe, '_id') ?
                           this.props.selectedUserRecipe.ingredients.map((ingredient, idx) => {
                                return <Form.Control key={idx} type="text" name="ingredient" defaultValue={ingredient}/>;
                           })
                           :
                           this.props.selectedUserRecipe.ingredients.map((ingredient, idx) => {
                            return <Form.Control key={idx} type="text" name="ingredient" defaultValue={ingredient.original}/>;
                            })
                            }
                        </Form.Group>
                        <Form.Group controlId="steps" >
                            <Form.Label>Instructions</Form.Label>
                           {this.props.selectedUserRecipe.steps && 
                           Object.hasOwn(this.props.selectedUserRecipe, '_id') ? 
                           this.props.selectedUserRecipe.steps.map((step, idx) => {
                            return <Form.Control key={idx} type="text" name="step" defaultValue={step}/>;
                             })
                           : this.props.selectedUserRecipe.steps[0].steps.map((step, idx) => {
                                return <Form.Control key={idx} type="text" name="step" defaultValue={step.step}/>;
                           })
                           }
                        </Form.Group>
                        <Form.Group controlId="imageUrl" >
                            <Form.Label>Image Url</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.selectedUserRecipe.imageUrl}/>
                        </Form.Group>
                        <Button type="submit">Apply Changes</Button>
                    </Form>
                </Modal.Body>
            </Modal>
            }
            </>
        );
    }
}

export default CustomRecipeModal;