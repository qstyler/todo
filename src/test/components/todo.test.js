import React from 'react'
import { shallow } from 'enzyme';

import Todo from '../../components/Todo/Todo';

describe('Todo test suite', () => {
    it('Todo should be true', () => {
        expect(shallow(<Todo />)).toBeTruthy();
    });
});