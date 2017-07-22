import React, { Component } from 'react'
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const { todos, searchText, searchCompleted } = this.props;

        const ListOfTodos =
            todos
                .filter(todo =>
                    (searchCompleted || !todo.completed)
                    && todo.text.toLowerCase().includes(searchText.toLowerCase())
                )
                .map(todo => (
                    <TodoItem key={todo.id} {...todo} />
                ));

        return (
            <div>
                {ListOfTodos}
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    searchCompleted: PropTypes.bool,
    searchText: PropTypes.string,
};

TodoList.defaultProps = {
    searchCompleted: false,
    searchText: '',
};

export default TodoList;