import React from 'react'
import { shallow } from 'enzyme';
import 'jest-enzyme';

import { Todo } from '../../components/Todo';
import { SearchTodo } from '../../components/Todo';
import { AddTodo } from '../../components/Todo';

describe('Todo test suite', () => {
    it('Todo should be true', () => {
        expect(shallow(<Todo />)).toBeTruthy();
    });
    it("should have all children", () => {
        expect(shallow(<Todo />)).toContainReact(<SearchTodo />);
        expect(shallow(<Todo />)).toContainReact(<AddTodo />);
    });
});