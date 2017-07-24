import React from 'react'
import { shallow } from 'enzyme';

import { TodoList } from '../../components/Todo/TodoList';
import { TodoItem } from '../../components/Todo';

describe('Todolist test suite', () => {
    it('Todolist should be true', () => {
        expect(shallow(<TodoList classes={{}} todos={[]} searchText="" />)).toBeTruthy();
    });

    it('should have TodoItems rendered', () => {
        const todos = [
            { id: '1', completed: false, text: 'text' },
            { id: '2', completed: false, text: 'text 2' },
        ];
        const wrapper = shallow(<TodoList classes={{}} todos={todos} searchText="" />);
        expect(wrapper.find(TodoItem)).toHaveLength(todos.length);
    });


    describe('filtering todo items', () => {
        it('should filter completed todos', () => {
            const todos = [
                { id: '1', completed: false, text: 'text' },
                { id: '2', completed: true, text: 'text 2' },
            ];

            const wrapper = shallow(<TodoList classes={{}} todos={todos} searchText="" />);

            expect(wrapper.find(TodoItem)).toHaveLength(1);
        });

        it('should  NOT filter todos when searchAll is true', () => {
            const todos = [
                { id: '1', completed: false, text: 'text' },
                { id: '2', completed: true, text: 'text 2' },
            ];

            const wrapper = shallow(<TodoList classes={{}} todos={todos} searchAll={true} searchText="" />);

            expect(wrapper.find(TodoItem)).toHaveLength(todos.length);
        });


        it('should filter todos when text is passed', () => {
            const todos = [
                { id: '1', completed: false, text: 'text' },
                { id: '2', completed: false, text: 'text 2' },
            ];

            const wrapper = shallow(<TodoList classes={{}} todos={todos} searchText='2' />);

            expect(wrapper.find(TodoItem)).toHaveLength(1);
        });
    });

});