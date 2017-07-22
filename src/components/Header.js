import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TitleBar, TitleBarTitle } from 'react-foundation';

class Header extends Component {
    render() {
        const { title } = this.props;
        return (
            <TitleBar>
                <TitleBarTitle>{title}</TitleBarTitle>
            </TitleBar>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};


export default Header;