import React from 'react'
import { shallow } from 'enzyme';

import { Dashboard } from '../../components/Dashboard/Dashboard';
import Profile from '../../components/Dashboard/Profile';
import Login from '../../components/Dashboard/Login';

describe('Dashboard test suite', () => {
    it('Dashboard should be true', () => {
        expect(shallow(<Dashboard auth={{}} />)).toBeTruthy();
    });

    it('should render Profile when authorized', () => {
        const wrapper = shallow(<Dashboard auth={{ authorized: true }} />);
        expect(wrapper.find(Profile)).toBeTruthy();
    });

    it('should render Login when not authorized', () => {
        const wrapper = shallow(<Dashboard auth={{ authorized: false }} />);
        expect(wrapper.find(Login)).toBeTruthy();
    });

});