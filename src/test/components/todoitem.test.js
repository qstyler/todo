import React from 'react'
import { mount, shallow } from 'enzyme';
import 'jest-enzyme';

import TodoItem from '../../components/Todo/Todoitem';

describe('Todoitem test suite', () => {
    it('Todoitem should be true', () => {
        const id = '1337';
        const text = 'weeaboo';

        const wrapper = shallow(<TodoItem id={id} text={text} />);

        expect(wrapper).toBeTruthy();
        expect(wrapper).toIncludeText(text);
    });

    it('should call onToggle function', () => {
        const id = '1337';
        const text = 'weeaboo';
        const spy = jest.fn();

        const wrapper = mount(<TodoItem id={id} text={text} onToggle={spy} />);

        wrapper.find('input').simulate('change');

        expect(spy).toBeCalledWith(id);

    });
});