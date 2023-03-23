import React from 'react';
import { Modal, Form} from 'react-bootstrap';

class CustomRecipeModal extends React.Component {
    render() {
        console.log(this.props.selectedUserRecipe);
        return(
            <Modal show={this.props.showCustomRecipeModal} onHide={this.props.toggleCustomRecipeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Customize Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="title" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" defaultValue={this.props.selectedUserRecipe.title}/>
                        </Form.Group>
                        <Form.Group controlId="ingredients" >
                            <Form.Label>Ingredients</Form.Label>
                           {this.props.selectedUserRecipe.ingredients && this.props.selectedUserRecipe.ingredients.map((ingredient, idx) => {
                                return <Form.Control key={idx} type="text" defaultValue={ingredient.nameClean}/>;
                           })}
                        </Form.Group>
                        <Form.Group controlId="steps" >
                            <Form.Label>Instructions</Form.Label>
                           {this.props.selectedUserRecipe.steps && this.props.selectedUserRecipe.steps[0].steps.map((step, idx) => {
                                return <Form.Control key={idx} type="text" value={step}/>;
                           })}
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}

export default CustomRecipeModal;