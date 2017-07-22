import React from 'react';
import ReactDOM from 'react-dom';

import { mount, shallow } from 'enzyme';
import 'jest-enzyme';

import App from '../App';

describe('Whole app suite', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it("should just work", () => {
        const app = mount(<App />);



    });
});
