import React from 'react';
import ReactDOM from 'react-dom';

import { mount } from 'enzyme';

import App from '../App';

describe('Whole app suite', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    describe('testing whole flow', () => {
        //const app =
            mount(<App />);

    });
});
