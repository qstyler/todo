import React from 'react'
import { shallow } from 'enzyme';
import uuid from 'uuid/v4';

import { Todo } from '../../components/Todo';
import { SearchTodo } from '../../components/Todo';
import { AddTodo } from '../../components/Todo';

describe('Todo test suite', () => {
    it('Todo should be true', () => {
        expect(shallow(<Todo />)).toBeTruthy();
    });

    it('should have all children', () => {
        const todo = shallow(<Todo />);
        expect(todo.find(SearchTodo)).toBeTruthy();
        expect(todo.find(AddTodo)).toBeTruthy();
    });

    it('should have state updated on handleAddTodo', () => {
        const todo = shallow(<Todo />);

        console.log(todo.state());
        const length = todo.state('todos').length;

        todo.instance().handleAddTodo('test');

        expect(todo.state('todos')).toHaveLength(length + 1);
    });

    it('should toggle completed status on a state', () => {
        const todo = shallow(<Todo />);
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