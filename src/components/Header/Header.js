import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { TopBar, TopBarTitle, TopBarRight, Menu, MenuItem } from 'react-foundation';

import { startLogout } from '../../actions/actions';

import injectSheet from './Styles';

export class Header extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.dispatch(startLogout());
    }

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
                            <NavLink to="/">Dashboard</NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/todos">Todos</NavLink>
                        </MenuItem>
                        <MenuItem>
                            <a onClick={this.handleLogout}>Logout</a>
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


export default connect()(injectSheet(Header));