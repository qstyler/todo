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

    it('should call the handler', () => {
        const dispatchSpy = jest.fn();
        const addTodo = mount(<AddTodo classes={{}} dispatch={dispatchSpy} />);

        const input = addTodo.ref('text');
        input.node.value = 'whatever';
        input.simulate('change', input);

        addTodo.find(Button).simulate('submit');
        expect(dispatchSpy).toBeCalledWith(expect.any(Function));
    });

    it('should not call the handler and focus the input', () => {
        const dispatchSpy = jest.fn();
        const addTodo = mount(<AddTodo classes={{}} dispatch={dispatchSpy} />);

        addTodo.find(Button).simulate('submit');
        expect(dispatchSpy).not.toBeCalled();
    });
});