import React from 'react'
import { mount, shallow } from 'enzyme';

import { TodoList } from '../../components/Todo';
import { TodoItem } from '../../components/Todo';

describe('Todolist test suite', () => {
    it('Todolist should be true', () => {
        expect(shallow(<TodoList todos={[]} />)).toBeTruthy();
    });
    it('should have TodoItems rendered', () => {
        const wrapper = mount(<TodoList todos={[{ id: 1, text: 'text' }]} />);
        expect(wrapper.find(TodoItem)).toHaveLength(1);
    });
});