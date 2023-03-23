import React from "react";
import { Modal, Image, Button } from "react-bootstrap";

class RecipeModal extends React.Component{
  handleSave = () => {
    this.props.saveRecipe(this.props.selectedRecipe)
    this.props.toggleRecipeModal()
  }

  handleCloseAccountModal = ()=> {
    if (this.props.accountCardModal){
      this.props.toggleAccountRecipeModal()
    }
    else {
      this.props.toggleRecipeModal()
    }
  }
  render(){
    let recipe = this.props.accountCardModal ? this.props.selectedUserRecipe : this.props.selectedRecipe

    return (
      <>
        <Modal

        show={this.props.showRecipeModal || this.props.accountCardModal} 
        onHide={this.handleCloseAccountModal}

        >
          <Modal.Header closeButton>
            {recipe.title &&
              <Modal.Title id="contained-modal-title-vcenter">
                {recipe.title}
              </Modal.Title>
            }
            { !this.props.accountCardModal &&
              <>
                <Button onClick={this.handleSave} variant="primary">Save</Button>{' '}
              </>
            }

          </Modal.Header>
          <Modal.Body>
            { this.props.accountCardModal && recipe.title ?
              <>
              <Image
                src={recipe.imageUrl}
                alt={recipe.title} 
                fluid={true} 
              />
              </>
              :
              <Image
                src={recipe.image}
                alt={recipe.title} 
                fluid={true} 
              />
            }
           <h2>Ingredients</h2>
           <ul>
            { !this.props.accountCardModal && recipe.extendedIngredients &&
              <>
                {recipe.extendedIngredients.map((ingredient, idx) =>{
                  return(
                    <li key={idx}>{ingredient.original}</li>
                  )
                })}
              </>
            }

            {
              this.props.accountCardModal && recipe.ingredients &&
              <>
              {
                recipe.ingredients.map((ingredient, idx)=>{
                  return <li key={idx}>{ingredient.original}</li>
                })
              }
              </>
            }
            </ul>
            <h2>Instructions</h2>
            <ol>
              { !this.props.accountCardModal && recipe.analyzedInstructions &&
                <>
                {recipe.analyzedInstructions[0].steps.map((step, idx) => {
                  return (
                    <li key={idx}>{step.step}</li>
                  )
                })}
                </>
              }
              { this.props.accountCardModal && recipe.steps &&
                <>
                {recipe.steps[0].steps.map((step, idx) => {
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
