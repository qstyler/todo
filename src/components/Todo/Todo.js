import React, { Component } from 'react'
import PropTypes from 'prop-types';
import TodoList from './TodoList';

class Todo extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            todos: [
                { id: 1, text: 'Get married' },
                { id: 2, text: 'Buy a house' },
                { id: 3, text: 'Get settled in' },
                { id: 4, text: 'Furniture and so on' },
                { id: 5, text: 'Just wait for a bit' },
                { id: 6, text: 'Eat properly: 3 hot meals a day' },
            ]
        };
    }

    render() {
        const { todos } = this.state;
        return (
            <div>
                <TodoList todos={todos} />
            </div>
        );
    }
}

Todo.propTypes = {};
Todo.defaultProps = {};

export default Todo;