import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Profile extends Component {
    render() {
        const { displayName, photoURL } = this.props.auth;
        return (
            <div>
                <img src={photoURL} />
                <p>Hello, {displayName}!</p>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
});
export default connect(mapStateToProps)(Profile);