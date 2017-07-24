import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import TodoItem from './TodoItem';
import injectSheet from './Styles';

export class TodoList extends Component {
    render() {
        const {
            todos, searchText, searchCompleted, classes
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
};

TodoList.defaultProps = {
    searchCompleted: false,
    searchText: '',
};

const mapStateToProps = (state) => ({
    todos: state.todos,
});

export default connect(mapStateToProps)(injectSheet(TodoList));