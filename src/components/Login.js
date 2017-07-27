import React, { Component } from 'react';
import { Button, Callout } from 'react-foundation';
import TiSocialGithub from 'react-icons/lib/ti/social-github';

class Login extends Component {
    render() {
        return (
            <Callout>
                <h3>Login</h3>
                <p>Login with your GitHub account.</p>
                <Button isExpanded>
                    <TiSocialGithub size={24} /> Login with GitHub
                </Button>
            </Callout>
        );
    }
}

export default Login;