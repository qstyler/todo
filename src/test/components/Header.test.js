import React from 'react'
import { shallow } from 'enzyme';

import { Header } from '../../components/Header/Header';

describe('Header test suite', () => {
    it('Header should be true', () => {
        expect(shallow(<Header dispatch={() => {}} title="" classes={{}} />)).toBeTruthy();
    });

    it('onclick should dispatch async function', () => {
        const spy = jest.fn();
        const wrapper = shallow(<Header dispatch={spy} title="" classes={{}} />);

        wrapper.find('a[children="Logout"]').simulate('click');

        expect(spy).toBeCalledWith(expect.any(Function));
    });
});