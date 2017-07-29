import React, { Component } from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './components/Dashboard';
import Todo from './components/Todo';
import Spinner from './components/Spinner';

class Routes extends Component {

    render() {
        const { auth } = this.props;
        const RedirectHome = () => <Redirect to="/" />;

        if (auth.waiting) {
            return (
                <Spinner />
            );
        } else {
            return (
                <div>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/todos" component={auth.authorized ? Todo : RedirectHome} />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(Routes));