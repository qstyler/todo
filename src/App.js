import React, { Component } from 'react';
import { Provider } from 'react-redux';

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


class App extends Component {
    render() {
        return (
            <Provider store={configure()}>
                <ThemeProvider theme={Colors}>
                    <JssProvider jss={jss}>
                        <div>
                            <Header title="My awesome todo app" />
                            <Todo />
                        </div>
                    </JssProvider>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default App;
