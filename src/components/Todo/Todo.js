import React, { Component } from 'react'

import TodoList from './TodoList';
import SearchTodo from './SearchTodo';
import AddTodo from './AddTodo';

class Todo extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
            todos: [
                { id: 1, completed: false, text: 'Get married' },
                { id: 2, completed: false, text: 'Buy a house' },
                { id: 3, completed: false, text: 'Get settled in' },
                { id: 4, completed: false, text: 'Furniture and so on' },
                { id: 5, completed: false, text: 'Just wait for a bit' },
                { id: 6, completed: true, text: 'Eat properly: 3 hot meals a day' },
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
        const newId = this.getNewId();
        const todo = { id: newId, completed: false, text: text };
        console.log(`added todo`, todo);

        this.setState({ todos: [...this.state.todos, this.state] });
    }

    getNewId() {
        return Math.max(...this.state.todos.map(todo => todo.id)) + 1;
    }

    render() {
        const { todos, search } = this.state;
        return (
            <div>
                <SearchTodo onChanged={this.handleSearch} />
                <TodoList todos={todos} {...search} />
                <AddTodo onTodoAdded={this.handleAddTodo} />
            </div>
        );
    }
}


export default Todo;