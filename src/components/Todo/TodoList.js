import React, { Component } from 'react'
import { connect } from 'react-redux';

import Spinner from '../Spinner';

import TodoItem from './TodoItem';
import injectSheet from './Styles';

export class TodoList extends Component {
    render() {
        const {
            todos, searchText, searchAll, classes, loading
        } = this.props;

        const filteredTodos = todos
            .filter(todo =>
                (searchAll || !todo.completed)
                && todo.text.toLowerCase().includes(searchText.toLowerCase())
            );

        const ListOfTodos = () => {
            if (loading) {
                return (
                    <Spinner />
                );
            } else if (!filteredTodos.length) {
                return (<p className={classes.containerMessage}>Nothing to do</p>);
            } else {
                return filteredTodos
                    .map(todo => (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                        />
                    ));
            }
        };

        return (
            <div>
                {ListOfTodos()}
            </div>
        );
    }
}

TodoList.propTypes = {};

TodoList.defaultProps = {};

export const mapStateToProps = (state) => ({
    loading: state.loading,
    todos: state.todos,
    searchText: state.searchText || '',
    searchAll: !!state.searchAll,
});

export default connect(mapStateToProps)(injectSheet(TodoList));