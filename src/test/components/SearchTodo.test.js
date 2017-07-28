import React from 'react'
import { mount, shallow } from 'enzyme';

import {
    toggleSearchAll as toggleSearchAllAction,
    setSearchText as setSearchTextAction,
} from '../../actions/actions';

import { SearchTodo } from '../../components/Todo/SearchTodo';

describe('Searchtodo test suite', () => {
    it('Searchtodo should be true', () => {
        expect(shallow(<SearchTodo classes={{}} dispatch={() => {}} />)).toBeTruthy();
    });

    describe('onSearch handler', () => {

        it('should call onSearch handler when text is changed', () => {
            const spy = jest.fn();
            const wrapper = mount(<SearchTodo classes={{}} dispatch={spy} />);
            const input = wrapper.ref('searchText');

            const searchText = 'test';

            input.node.value = searchText;
            input.simulate('change', input);

            expect(spy).toBeCalledWith(setSearchTextAction(searchText));
        });

        it('should call onSearch handler when checkbox triggered', () => {
            const spy = jest.fn();
            const wrapper = mount(<SearchTodo classes={{}} dispatch={spy} />);
            const input = wrapper.ref('searchAll');

            input.node.checked = true;
            input.simulate('change', input);

            expect(spy).toBeCalledWith(toggleSearchAllAction());
        });

    });

});