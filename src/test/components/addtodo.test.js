import React from 'react'
import { mount, shallow } from 'enzyme';
import { Button } from 'react-foundation';

import { AddTodo } from '../../components/Todo/AddTodo';

describe('AddTodo test suite', () => {
    it('AddTodo should be true', () => {
        expect(AddTodo).toBeTruthy();
    });

    it('should have an input and a button rendered', () => {
        const addTodo = shallow(<AddTodo classes={{}} onTodoAdded={() => {}} />);
        expect(addTodo.find(Button)).toBeTruthy();
        expect(addTodo.find('input')).toBeTruthy();
    });

    it('should not call the handler', () => {
        const spy = jest.fn();
        const addTodo = shallow(<AddTodo classes={{}} onTodoAdded={spy} />);

        addTodo.find(Button).simulate('submit');
        expect(spy).not.toBeCalled();
    });

    it('should call the handler', () => {
        const spy = jest.fn();
        const addTodo = mount(<AddTodo classes={{}} onTodoAdded={spy} />);


        const input = addTodo.ref('text');
        const inputText = 'asd';

        input.node.value = inputText;
        input.simulate('change', input);

        addTodo.find(Button).simulate('submit');
        expect(spy).toBeCalledWith(inputText);
    });
});