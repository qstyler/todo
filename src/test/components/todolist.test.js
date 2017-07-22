import React from 'react'
import { shallow } from 'enzyme';

import TodoList from '../../components/Todo/TodoList';

describe('Todolist test suite', () => {
    it('Todolist should be true', () => {
        expect(shallow(<TodoList todos={[]} />)).toBeTruthy();
    });
});