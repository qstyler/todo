import React, { Component } from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './components/Dashboard';
import Todo from './components/Todo/Todo';
import Spinner from './components/Spinner/Spinner';

class Routes extends Component {

    render() {
        const { authorized } = this.props;
        const RedirectHome = () => <Redirect to="/" />;

        if (authorized === 'undefined') {
            return (
                <Spinner />
            );
        } else {
            return (
                <div>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/todos" component={authorized ? Todo : RedirectHome} />
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    authorized: state.authorized,
});

export default withRouter(connect(mapStateToProps)(Routes));