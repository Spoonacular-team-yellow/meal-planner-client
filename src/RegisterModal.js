import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Modal from 'react-bootstrap/Modal';
import RegisterForm from './RegisterForm';

class Register extends React.Component {
    render() {
        return (
            <div>
                <Modal
                    show={this.props.showRegisterModal}
                    backdrop="static"
                    keyboard="false"
                >
                    <RegisterForm 
                        createUser={this.props.createUser}
                        toggleRegisterModal={this.props.toggleRegisterModal}
                    />
                </Modal>
            </div>
        );
    }
}

export default withAuth0(Register);