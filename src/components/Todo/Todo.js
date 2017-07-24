import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';

import TodoList from './TodoList';
import SearchTodo from './SearchTodo';
import AddTodo from './AddTodo';

import injectSheet from './Styles';

export class Todo extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Row>
                <Column small={11} medium={6} large={5} centerOnSmall>
                    <div className={classes.container}>
                        <SearchTodo />

                        <TodoList />

                        <AddTodo />
                    </div>
                </Column>
            </Row>
        );
    }
}


export default injectSheet(Todo);