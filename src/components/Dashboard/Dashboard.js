import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Callout } from 'react-foundation';

import Login from './Login';
import Profile from './Profile';

export class Dashboard extends Component {
    render() {
        const { auth } = this.props;

        return (
            <Callout>
                {(() => {
                    if (auth.authorized) {
                        return <Profile />;
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

// noinspection JSUnusedGlobalSymbols
export default connect(mapStateToProps)(Dashboard);