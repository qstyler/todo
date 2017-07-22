import React from 'react'
import { shallow } from 'enzyme';
import 'jest-enzyme';

import TodoItem from '../../components/Todo/Todoitem';

describe('Todoitem test suite', () => {
    it('Todoitem should be true', () => {
        const id = '1337';
        const text = 'weeaboo';

        const wrapper = shallow(<TodoItem id={id} text={text} />);

        expect(wrapper).toBeTruthy();
        expect(wrapper).toIncludeText(text);
        expect(wrapper).toIncludeText(id);
    });
});