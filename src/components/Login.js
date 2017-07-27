import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Callout } from 'react-foundation';

import TiSocialGithub from 'react-icons/lib/ti/social-github';

import { startLogin } from '../actions/actions';


class Login extends Component {


    constructor(props, context) {
        super(props, context);

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        this.props.dispatch(startLogin());
    };

    render() {
        return (
            <Callout>
                <h3>Login</h3>
                <p>Login with your GitHub account.</p>
                <Button isExpanded onClick={this.handleLogin}>
                    <TiSocialGithub size={24} /> Login with GitHub
                </Button>
            </Callout>
        );
    }
}

export default connect()(Login);