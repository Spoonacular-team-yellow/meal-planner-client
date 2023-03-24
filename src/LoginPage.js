import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import './LoginPage.css'


class LoginPage extends React.Component {
    render() {
        return (
            <>
            <div className="login-container">
                <section className='login'>
                    <h1>Welcome to GrubGuide</h1>
                    <p className="mb-4">Please login into your account.</p>
                    {
                        !this.props.auth0.isAuthenticated
                        &&
                        <LoginButton />
                    }
                </section>
            </div>
            </>
        );
    }
}

export default withAuth0(LoginPage);