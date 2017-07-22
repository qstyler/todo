import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Colors } from 'react-foundation';

class AddTodo extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(e) {
        e.preventDefault();

        const text = this.refs.text.value.trim();

        if (text !== '') {
            this.refs.text.value = '';
            this.props.onTodoAdded(text);
        } else {
            this.refs.text.focus();
        }
    }

    render() {
        return (
            <form onSubmit={this.handleAddTodo}>
                <input type="text" ref="text" />
                <Button color={Colors.PRIMARY} isExpanded>Add</Button>
            </form>
        );
    }
}

AddTodo.propTypes = {
    onTodoAdded: PropTypes.func.isRequired,
};
AddTodo.defaultProps = {};

export default AddTodo;