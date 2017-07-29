import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Profile extends Component {
    render() {
        return (
            <div>
                <p>Hello, authorized user</p>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(Profile);