import React from 'react'
import { shallow } from 'enzyme';

import { TodoItem } from '../../components/Todo/Todoitem';
import { toggleTodo } from '../../actions/actions';

describe('Todoitem test suite', () => {
    it('Todoitem should be true', () => {
        const id = '1337';
        const text = 'weeaboo';

        const wrapper = shallow(<TodoItem classes={{}} id={id} text={text} />);

        expect(wrapper).toBeTruthy();
        expect(wrapper).toIncludeText(text);
    });

    describe('checkbox suite', () => {
        it('should render checked when completed', () => {
            const wrapper = shallow(<TodoItem classes={{}} completed={true} id='' text='' onToggle={() => {}} />);
            expect(wrapper.find('input')).toHaveProp('checked', true);
        });

        it('should render not checked when completed', () => {
            const wrapper = shallow(<TodoItem classes={{}} completed={false} id='' text='' onToggle={() => {}} />);
            expect(wrapper.find('input')).toHaveProp('checked', false);
        });
    });

    it('should call onToggle function', () => {
        const id = '1337';
        const text = 'weeaboo';
        const spy = jest.fn();

        const wrapper = shallow(<TodoItem id={id} dispatch={spy} text={text} classes={{}} />);

        wrapper.find('input').simulate('change');

        expect(spy).toBeCalledWith(expect.any(Function));
    });

});