import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { Row, Column } from 'react-foundation';

import { create as createJss } from 'jss';
import { JssProvider, ThemeProvider } from 'react-jss';
import jssNested from 'jss-nested';
import camelCase from 'jss-camel-case';

import Header from './components/Header/Header';
import { Todo } from './components/Todo';
import Login from './components/Login';

import { configure } from './store/configure';

// styles
import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation-float.min.css';

import Colors from './utils/Colors';
import { initialize } from './actions/actions';

const jss = createJss();
jss.use(jssNested());
jss.use(camelCase());


const store = configure();
store.dispatch(initialize());


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={Colors}>
                    <JssProvider jss={jss}>
                        <div>
                            <Header title="My awesome todo app" />
                            <Row>
                                <Column small={11} medium={6} large={5} centerOnSmall>

                                    <BrowserRouter>
                                        <div>
                                            <Route exact path="/" component={Login} />
                                            <Route path="/todos" component={Todo} />
                                        </div>
                                    </BrowserRouter>
                                </Column>
                            </Row>
                        </div>
                    </JssProvider>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default App;
