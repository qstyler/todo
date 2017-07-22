import React, { Component } from 'react'
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const { todos } = this.props;
        return (
            <div>
                {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
};

TodoList.defaultProps = {};

export default TodoList;