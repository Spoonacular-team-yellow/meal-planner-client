import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import './LoginPage.css'


class LoginPage extends React.Component {
    render() {
        return (
            <>
                <section className='login'>
                    <h1>Welcome to GrubGuide</h1>
                    <p>Please login into your account.</p>
                    {
                        !this.props.auth0.isAuthenticated
                        &&
                        <LoginButton />
                    }
                </section>
            </>
        );
    }
}

export default withAuth0(LoginPage);