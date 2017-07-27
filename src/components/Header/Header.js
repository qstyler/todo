import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TopBar, TopBarTitle, TopBarRight, Menu, MenuItem } from 'react-foundation';

import injectSheet from './Styles';

class Header extends Component {
    render() {
        const { title, classes } = this.props;
        return (
            <TopBar className={classes.titleBar}>
                <TopBarTitle>
                    {title}
                </TopBarTitle>
                <TopBarRight>
                    <Menu className={classes.titleMenu}>
                        <MenuItem>
                            <a href="">Logout</a>
                        </MenuItem>
                    </Menu>
                </TopBarRight>
            </TopBar>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};


export default injectSheet(Header);