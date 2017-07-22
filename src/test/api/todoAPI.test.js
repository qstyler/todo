import React from 'react'

import TodoAPI from '../../api/TodoAPI';

describe('TodoAPI test suite', () => {
    it('TodoAPI should be true', () => {
        expect(TodoAPI).toBeTruthy();
    });

    describe('setTodos', () => {

        it('should set valid todos array', () => {
            const todos = [
                { id: 1, completed: false, text: '1' },
                { id: 2, completed: true, text: '2' },
            ];
            TodoAPI.setTodos(todos);

            expect(TodoAPI.getTodos()).toEqual(todos);
        });

        it('should NOT set non-valid todos array', () => {
            const todosValid = [
                { id: 1, completed: false, text: '1' },
                { id: 2, completed: true, text: '2' },
            ];
            TodoAPI.setTodos(todosValid);

            const todosInvalid = {myDick: 'is bigger than a bridge'};
            TodoAPI.setTodos(todosInvalid);

            expect(TodoAPI.getTodos()).toEqual(todosValid);
        });

    });
});