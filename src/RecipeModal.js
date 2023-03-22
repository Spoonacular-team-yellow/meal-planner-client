import React from "react";
// import CloseButton from 'react-bootstrap/CloseButton';
import { Modal, Image, Button } from "react-bootstrap";

class RecipeModal extends React.Component{
  handleSave = () => {
    this.props.saveRecipe(this.props.selectedRecipe)
    this.props.toggleRecipeModal()
    // console.log(this.props, 'this.props')
  }
  render(){
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
            {this.props.selectedRecipe.title &&
              <Modal.Title id="contained-modal-title-vcenter">
                {this.props.selectedRecipe.title}
              </Modal.Title>
            }
             <Button onClick={this.handleSave} variant="primary">Save</Button>{' '}

          </Modal.Header>
          <Modal.Body>
            {this.props.selectedRecipe.title &&
              <Image
              src={this.props.selectedRecipe.image}
              alt={this.props.selectedRecipe.title} 
              fluid={true} 
              />
            }
           <h2>Ingredients</h2>
           <ul>
            { this.props.selectedRecipe.extendedIngredients &&
              <>
                {this.props.selectedRecipe.extendedIngredients.map((ingredient, idx) =>{
                  return(
                    <li key={idx}>{ingredient.original}</li>
                  )
                })}
              </>
            }
            </ul>
            <h2>Instructions</h2>
            <ol>
              { this.props.selectedRecipe.analyzedInstructions &&
                <>
                {this.props.selectedRecipe.analyzedInstructions[0].steps.map((step, idx) => {
                  return (
                    <li key={idx}>{step.step}</li>
                  )
                })}
                </>
              }
            </ol>

          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default RecipeModal;
