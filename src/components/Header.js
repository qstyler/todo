import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TitleBar, TitleBarTitle } from 'react-foundation';
import injectSheet from 'react-jss';

const styles = {
    titleBar: {
        marginBottom: '2rem',
    }
};

class Header extends Component {
    render() {
        const { title, classes } = this.props;
        return (
            <TitleBar className={classes.titleBar}>
                <TitleBarTitle>{title}</TitleBarTitle>
            </TitleBar>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};


export default injectSheet(styles)(Header);