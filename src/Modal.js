import React from "react";
import Button from "react-bootstrap/Button";
// import CloseButton from 'react-bootstrap/CloseButton';
import Modal from "react-bootstrap/Modal";
import Image from 'react-bootstrap/Image'

class TheModal extends React.Component{
  render(){
    return (
      <>
        <Modal
        //   size="lg"
        //   aria-labelledby="contained-modal-title-vcenter"
        //   centered
        //   show={this.props.modalDisp}
        //   onHide={this.props.stopDisp}
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
            // onClick={this.props.stopDisp}
            >Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default TheModal;
