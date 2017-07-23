import React from 'react'
import { mount, shallow } from 'enzyme';

import { TodoItem } from '../../components/Todo/Todoitem';

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
            const wrapper = mount(<TodoItem classes={{}} completed={true} id='' text='' onToggle={() => {}} />);
            expect(wrapper.find('input')).toHaveProp('checked', true);
        });

        it('should render not checked when completed', () => {
            const wrapper = mount(<TodoItem classes={{}} completed={false} id='' text='' onToggle={() => {}} />);
            expect(wrapper.find('input')).toHaveProp('checked', false);
        });
    });

    it('should call onToggle function', () => {
        const id = '1337';
        const text = 'weeaboo';
        const spy = jest.fn();

        const wrapper = mount(<TodoItem classes={{}} id={id} text={text} onToggle={spy} />);

        wrapper.find('input').simulate('change');

        expect(spy).toBeCalledWith(id);

    });
});