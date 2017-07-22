import React, { Component } from 'react'
import uuid from 'uuid/v4';

import TodoList from './TodoList';
import SearchTodo from './SearchTodo';
import AddTodo from './AddTodo';

class Todo extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            todos: [
                { id: uuid(), completed: false, text: 'Get married' },
                { id: uuid(), completed: false, text: 'Buy a house' },
                { id: uuid(), completed: false, text: 'Get settled in' },
                { id: uuid(), completed: false, text: 'Furniture and so on' },
                { id: uuid(), completed: false, text: 'Just wait for a bit' },
                { id: uuid(), completed: true, text: 'Eat properly: 3 hot meals a day' },
            ],
            search: {
                searchText: '',
                searchCompleted: false,
            }
        };
    }

    handleSearch(text, showAll) {
        this.setState({
            search: {
                searchText: text,
                searchCompleted: showAll,
            }
        })
    }

    handleAddTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    completed: false,
                    text: text
                }
            ]
        });
    }

    handleToggle(id) {
        const updatedState = this.state.todos
            .map(todo => ({
                    ...todo,
                    completed: !!(todo.id === id ^ todo.completed)
                })
            )
        ;
        this.setState({
            todos: updatedState,
        })
    }

    render() {
        const { todos, search } = this.state;
        return (
            <div>
                <SearchTodo onChanged={this.handleSearch} />

                <TodoList
                    todos={todos}
                    onToggle={this.handleToggle}
                    {...search}
                />

                <AddTodo onTodoAdded={this.handleAddTodo} />
            </div>
        );
    }
}


export default Todo;