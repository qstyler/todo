import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Callout } from 'react-foundation';
import Login from './Login';

export class Dashboard extends Component {
    render() {
        const { authorized } = this.props;

        return (
            <Callout>
                {(() => {
                    if (authorized) {
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
    authorized: state.authorized,
});

export default connect(mapStateToProps)(Dashboard);