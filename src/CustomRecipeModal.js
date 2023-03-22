import React from 'react';
import Modal from 'react-bootstrap/Modal';

class CustomRecipeModal extends React.Component {
    render() {
        return(
            <Modal show={this.props.showCustomRecipeModal} onHide={this.props.toggleCustomRecipeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedUserRecipe.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal>
        );
    }
}

export default CustomRecipeModal;