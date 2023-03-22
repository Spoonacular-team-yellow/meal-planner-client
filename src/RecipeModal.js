import React from "react";
// import CloseButton from 'react-bootstrap/CloseButton';
import { Modal, Image } from "react-bootstrap";

class RecipeModal extends React.Component{
  render(){
    console.log(this.props.selectedRecipe)
    return (
      <>
        <Modal
        //   size="lg"
        //   aria-labelledby="contained-modal-title-vcenter"
        //   centered
        show={this.props.showRecipeModal} 
        onHide={this.props.toggleRecipeModal}
        // recipes={this.props.recipe}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {/* {this.props.beastToDisp.title} */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <Image src={this.props.toggleRegisterModal.image } alt="it not working" fluid/> */}
            <p>
              {/* {this.props.beastToDisp.description} */}
            </p>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default RecipeModal;
