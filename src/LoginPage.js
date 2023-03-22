import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LoginPage extends React.Component {
    render() {
        return (
            <>
                 <h1>Welcome to Meal Planner</h1>
                <p>Please login into your account.</p>
                {
                !this.props.auth0.isAuthenticated
                &&
                <LoginButton />
                }
            </>
        );
    }
}

export default withAuth0(LoginPage);