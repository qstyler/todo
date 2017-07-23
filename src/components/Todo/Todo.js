import React, { Component } from 'react';
import uuid from 'uuid/v4';
import moment from 'moment';
import { Row, Column } from 'react-foundation';

import TodoList from './TodoList';
import SearchTodo from './SearchTodo';
import AddTodo from './AddTodo';

import TodoAPI from '../../api/TodoAPI';

import injectSheet from './Styles';

export class Todo extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.todos = this.todos.bind(this);

        this.state = {
            todos: TodoAPI.getTodos(),
            search: {
                searchText: '',
                searchCompleted: false,
            }
        };
    }

    componentDidUpdate() {
        TodoAPI.setTodos(this.todos());
    }

    handleSearch(text, showAll) {
        this.setState({
            search: {
                searchText: text,
                searchCompleted: showAll,
            }
        })
    }

    todos() {
        return this.state.todos || [];
    }

    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.todos(),
                {
                    id: uuid(),
                    completed: false,
                    text: text,
                    createdAt: moment().unix(),
                    completedAt: undefined,
                }
            ]
        });
    }

    handleToggle(id) {
        const updatedState = this.todos()
            .map(todo => ({
                    ...todo,
                    completed: !!(todo.id === id ^ todo.completed),
                    completedAt: todo.completed ? undefined : moment().unix(),
                })
            );
        this.setState({
            todos: updatedState,
        })
    }

    render() {
        const { todos, search } = this.state;
        const { classes } = this.props;
        return (
            <Row>
                <Column small={11} medium={6} large={5} centerOnSmall>
                    <div className={classes.container}>
                        <SearchTodo onChanged={this.handleSearch} />

                        <TodoList
                            todos={todos}
                            onToggle={this.handleToggle}
                            {...search}
                        />

                        <AddTodo onTodoAdded={this.handleAddTodo} />
                    </div>
                </Column>
            </Row>
        );
    }
}


export default injectSheet(Todo);