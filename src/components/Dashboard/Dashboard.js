import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Callout } from 'react-foundation';
import Login from './Login';

export class Dashboard extends Component {
    render() {
        const { auth } = this.props;

        return (
            <Callout>
                {(() => {
                    if (auth.authorized) {
                        return <p>Hello, authorized user</p>;
                    } else {
                        return <Login />;
                    }
                })()}
            </Callout>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);