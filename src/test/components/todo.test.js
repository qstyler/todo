import React from 'react'
import { shallow } from 'enzyme';
import 'jest-enzyme';

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

        const length = todo.state('todos').length;

        todo.instance().handleAddTodo('test');

        expect(todo.state('todos')).toHaveLength(length + 1);
    });
});