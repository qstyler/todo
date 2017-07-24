import React from 'react';
import { shallow } from 'enzyme';
import uuid from 'uuid/v4';

import { Todo } from '../../components/Todo/Todo';
import { SearchTodo } from '../../components/Todo';
import { AddTodo } from '../../components/Todo';

describe('Todo test suite', () => {
    it('Todo should be true', () => {
        expect(shallow(<Todo classes={{}} />)).toBeTruthy();
    });

    it('should have all children', () => {
        const todo = shallow(<Todo classes={{}} />);
        expect(todo.find(SearchTodo)).toBeTruthy();
        expect(todo.find(AddTodo)).toBeTruthy();
    });

});