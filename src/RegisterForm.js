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

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        this.props.createUser(e.target.username.value);
        this.props.toggleRegisterModal();
    };

    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                <Form.Label>Enter username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Enter username" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
          </Form>
        );
    }
};

export default RegisterForm;