import React, { Component } from 'react';

import TodoList from './TodoList';
import SearchTodo from './SearchTodo';
import AddTodo from './AddTodo';

import injectSheet from './Styles';

export class Todo extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <SearchTodo />

                <TodoList />

                <AddTodo />
            </div>
        );
    }
}


export default injectSheet(Todo);