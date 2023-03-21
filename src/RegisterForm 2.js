import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class RegisterForm extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            username: ''
        };
    };

    handleSubmit(){
        this.props.createUser(this.state.username);
        this.props.toggleRegisterModal();
    };

    handleUserName(e){
        this.setState({
            username: e.target.value
        });
    }

    render(){

        return (
            <Form >
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Enter username</Form.Label>
              <Form.Control onInput={this.handleUserName} type="text" name="username" placeholder="Enter username" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );
    }
};

export default RegisterForm;