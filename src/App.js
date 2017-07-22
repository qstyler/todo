import React, { Component } from 'react';

import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation-float.min.css';
import './styles/app.scss';

import Header from './components/Header';
import { Todo } from './components/Todo';


class App extends Component {
    render() {
        return (
            <div>
                <Header title="Todo" />
                <Todo />
            </div>
        );
    }
}

export default App;
