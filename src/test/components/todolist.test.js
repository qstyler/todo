import React from 'react'
import { mount, shallow } from 'enzyme';

import { TodoList } from '../../components/Todo';
import { TodoItem } from '../../components/Todo';

describe('Todolist test suite', () => {
    it('Todolist should be true', () => {
        expect(shallow(<TodoList todos={[]} />)).toBeTruthy();
    });
    it('should have TodoItems rendered', () => {
        const todos = [
            { id: 1, text: 'text' },
            { id: 2, text: 'text 2' },
        ];
        const wrapper = mount(<TodoList todos={todos} />);
        expect(wrapper.find(TodoItem)).toHaveLength(2);
    });
});