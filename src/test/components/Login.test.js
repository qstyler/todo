import React from 'react'
import { shallow } from 'enzyme';

import { Login } from '../../components/Dashboard/Login';
import { Button } from 'react-foundation';

describe('Login test suite', () => {
    it('Login should be true', () => {
        expect(shallow(<Login />)).toBeTruthy();
    });

    it('should dispatch START_LOGIN action', () => {
        const spy = jest.fn();
        const wrapper = shallow(<Login dispatch={spy} />);

        wrapper.find(Button).simulate('click');
        expect(spy).toBeCalledWith(expect.any(Function));
    });
});