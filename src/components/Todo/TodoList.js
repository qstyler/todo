import React, { Component } from 'react'
import PropTypes from 'prop-types';


import TodoItem from './TodoItem';
import injectSheet from './Styles';

export class TodoList extends Component {
    render() {
        const {
            todos, onToggle, searchText, searchCompleted, classes
        } = this.props;

        const filteredTodos = todos
            .filter(todo =>
                (searchCompleted || !todo.completed)
                && todo.text.toLowerCase().includes(searchText.toLowerCase())
            );

        const ListOfTodos =
            !filteredTodos.length
                ? <p className={classes.containerMessage}>Nothing to do</p>
                : filteredTodos
                    .map(todo => (
                        <TodoItem
                            key={todo.id}
                            onToggle={onToggle}
                            {...todo}
                        />
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
    onToggle: PropTypes.func,
};

TodoList.defaultProps = {
    searchCompleted: false,
    searchText: '',
    onToggle: () => {},
};

export default injectSheet(TodoList);