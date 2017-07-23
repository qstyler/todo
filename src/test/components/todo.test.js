import React from 'react';
import { mount, shallow } from 'enzyme';
import uuid from 'uuid/v4';

import { ThemeProvider } from 'react-jss';

import { Todo } from '../../components/Todo/Todo';
import { SearchTodo } from '../../components/Todo';
import { AddTodo } from '../../components/Todo';

describe('Todo test suite', () => {
    it('Todo should be true', () => {
        expect(shallow(<Todo classes={{}} />)).toBeTruthy();
    });

    it('should have all children', () => {
        const todo = shallow(<Todo classes={{}} />);
        expect(todo.find(SearchTodo)).toBeTruthy();
        expect(todo.find(AddTodo)).toBeTruthy();
    });

    it('should have state updated on handleAddTodo', () => {

        const todo = shallow(<Todo classes={{}} />);

        const length = todo.instance().todos().length;

        todo.instance().handleAddTodo('test');

        expect(todo.instance().todos()).toHaveLength(length + 1);
    });

    it('should toggle completed status on a state', () => {
        const todo = shallow(<Todo classes={{}} />);
        const id = uuid();

        todo.setState({
            todos: [{
                id: id,
                text: 'test 123',
                completed: false,
                createdAt: 0,
                completedAt: undefined,
            }]
        });

        expect(todo.state().todos[0].completed).toBeFalsy();
        expect(todo.state().todos[0].completedAt).toBeUndefined();

        todo.instance().handleToggle(id);

        expect(todo.state().todos[0].completed).toBeTruthy();
        expect(todo.state().todos[0].completedAt).toBeGreaterThan(15e8);
        expect(todo.state().todos[0].completedAt).toBeLessThan(17e8); // year 2027

    });
});