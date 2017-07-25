import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Colors } from 'react-foundation';

import { startAddTodo as addTodoAction } from '../../actions/actions';

import injectSheet from './Styles';

export class AddTodo extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(e) {
        e.preventDefault();

        const { dispatch } = this.props;

        const text = this.refs.text.value.trim();

        if (text !== '') {
            this.refs.text.value = '';
            dispatch(addTodoAction(text));
        } else {
            this.refs.text.focus();
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <form
                onSubmit={this.handleAddTodo}
                className={classes.containerFooter}
            >
                <input type="text" ref="text" />
                <Button color={Colors.PRIMARY} isExpanded>Add</Button>
            </form>
        );
    }
}

AddTodo.propTypes = {};
AddTodo.defaultProps = {};

export default connect()(injectSheet(AddTodo));