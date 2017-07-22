import React from 'react'
import { shallow } from 'enzyme';

import TodoItem from '../../components/Todo/Todoitem';

describe('Todoitem test suite', () => {
    it('Todoitem should be true', () => {
        expect(shallow(<TodoItem id="1" text="text" />)).toBeTruthy();
    });
});