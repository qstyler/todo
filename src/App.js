import React, { Component } from 'react';
import { create as createJss } from 'jss';
import { JssProvider, ThemeProvider } from 'react-jss';
import jssNested from 'jss-nested';
import camelCase from 'jss-camel-case';

import Header from './components/Header';
import { Todo } from './components/Todo';

import * as actions from './actions/actions';
import { configure } from './store/configure';

// styles
import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation-float.min.css';

import Colors from './utils/Colors';

const jss = createJss();
jss.use(jssNested());
jss.use(camelCase());

const store = configure();

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={Colors}>
                <JssProvider jss={jss}>
                    <div>
                        <Header title="My awesome todo app" />
                        <Todo />
                    </div>
                </JssProvider>
            </ThemeProvider>
        );
    }
}

export default App;
