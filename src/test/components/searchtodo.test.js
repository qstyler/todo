import React from 'react'
import { mount, shallow } from 'enzyme';

import { SearchTodo } from '../../components/Todo/SearchTodo';

describe('Searchtodo test suite', () => {
    it('Searchtodo should be true', () => {
        expect(shallow(<SearchTodo classes={{}} onChanged={() => {}} />)).toBeTruthy();
    });

    describe('onSearch handler', () => {

        it('should call onSearch handler when text is changed', () => {
            const spy = jest.fn();
            const wrapper = mount(<SearchTodo classes={{}} onChanged={spy} />);
            const input = wrapper.ref('searchText');

            const searchText = 'test';

            input.node.value = searchText;
            input.simulate('change', input);

            expect(spy).toBeCalledWith(searchText, false);
        });

        it('should call onSearch handler when checkbox triggered', () => {
            const spy = jest.fn();
            const wrapper = mount(<SearchTodo classes={{}} onChanged={spy} />);
            const input = wrapper.ref('searchAll');

            input.node.checked = true;
            input.simulate('change', input);

            expect(spy).toBeCalledWith('', true);
        });

    });

});