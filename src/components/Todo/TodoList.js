import React, { Component } from 'react'
import { connect } from 'react-redux';


import TodoItem from './TodoItem';
import injectSheet from './Styles';

export class TodoList extends Component {
    render() {
        const {
            todos, searchText, searchAll, classes
        } = this.props;

        const filteredTodos = todos
            .filter(todo =>
                (searchAll || !todo.completed)
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

};

TodoList.defaultProps = {
};

const mapStateToProps = (state) => ({
    todos: state.todos,
    searchText: state.searchText || '',
    searchAll: !!state.searchAll,
});

export default connect(mapStateToProps)(injectSheet(TodoList));