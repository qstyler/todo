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
            { id: 1, completed: false, text: 'text' },
            { id: 2, completed: false, text: 'text 2' },
        ];
        const wrapper = mount(<TodoList todos={todos} />);
        expect(wrapper.find(TodoItem)).toHaveLength(todos.length);
    });


    describe('filtering todo items', () => {
        it('should filter completed todos', () => {
            const todos = [
                { id: 1, completed: false, text: 'text' },
                { id: 2, completed: true, text: 'text 2' },
            ];

            const wrapper = mount(<TodoList todos={todos} />);

            expect(wrapper.find(TodoItem)).toHaveLength(1);
        });

        it('should  NOT filter todos when searchCompleted is true', () => {
            const todos = [
                { id: 1, completed: false, text: 'text' },
                { id: 2, completed: true, text: 'text 2' },
            ];

            const wrapper = mount(<TodoList todos={todos} searchCompleted={true} />);

            expect(wrapper.find(TodoItem)).toHaveLength(todos.length);
        });

        it('should filter todos when text is passed', () => {
            const todos = [
                { id: 1, completed: false, text: 'text' },
                { id: 2, completed: false, text: 'text 2' },
            ];

            const wrapper = mount(<TodoList todos={todos} searchText="2" />);

            expect(wrapper.find(TodoItem)).toHaveLength(1);
        });
    });

});