import React from "react";
// import CloseButton from 'react-bootstrap/CloseButton';
import { Modal, /*Image,*/ Button } from "react-bootstrap/Modal";

class RecipeModal extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      addBook: false,
      showModal: false,
    };
  }


  handleShow = (e) => {
    e.preventDefault();
    this.setState({
      addBook: true,
      showModal: true,
    });
  };

  handleHide = () => {
    this.setState({
      showModal: false,
    });
  };



  render(){

    return (
      <>
        <Modal
        //   size="lg"
        //   aria-labelledby="contained-modal-title-vcenter"
        //   centered
        show={this.state.showModal} 
        onHide={this.handleHide}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {/* {this.props.beastToDisp.title} */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <Image src={this.props.beastToDisp.image_url} alt="it not working" fluid/> */}
            <p>
              {/* {this.props.beastToDisp.description} */}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button 
            onHide={this.handleHide}
            >Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default RecipeModal;
