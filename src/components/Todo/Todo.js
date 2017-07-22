import React, { Component } from 'react'

import TodoList from './TodoList';
import SearchTodo from './SearchTodo';
import AddTodo from './AddTodo';

class Todo extends Component {


    constructor(props, context) {
        super(props, context);

        this.handleAddTodo = this.handleAddTodo.bind(this);

        this.state = {
            todos: [
                { id: 1, text: 'Get married' },
                { id: 2, text: 'Buy a house' },
                { id: 3, text: 'Get settled in' },
                { id: 4, text: 'Furniture and so on' },
                { id: 5, text: 'Just wait for a bit' },
                { id: 6, text: 'Eat properly: 3 hot meals a day' },
            ]
        };
    }

    handleAddTodo(text) {
        const newId = this.getNewId();
        const todo = { id: newId, text: text };
        console.log(`added todo`, todo);

        const { todos } = this.state;
        todos.push(todo);

        this.setState({ todos: todos });
    }

    getNewId() {
        return Math.max(...this.state.todos.map(todo => todo.id)) + 1;
    }

    render() {
        const { todos } = this.state;
        return (
            <div>
                <SearchTodo />
                <TodoList todos={todos} />
                <AddTodo onTodoAdded={this.handleAddTodo} />
            </div>
        );
    }
}


export default Todo;