import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Row, Column } from 'react-foundation';

import { create as createJss } from 'jss';
import { JssProvider, ThemeProvider } from 'react-jss';
import jssNested from 'jss-nested';
import camelCase from 'jss-camel-case';

import Header from './components/Header/Header';

import { configure } from './store/configure';

import firebase from './firebase';
import { initialize } from './firebase/initialize';
import { authorized } from './actions/actions';

import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation-float.min.css';

import Colors from './utils/Colors';
import Routes from './Routes';

const jss = createJss();
jss.use(jssNested());
jss.use(camelCase());


const store = configure();
store.dispatch(initialize());

firebase.auth().onAuthStateChanged((user) => {
    store.dispatch(authorized(!!user));
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={Colors}>
                    <JssProvider jss={jss}>
                        <BrowserRouter>
                            <div>
                                <Header title="My awesome todo app" />
                                <Row>
                                    <Column small={11} medium={6} large={5} centerOnSmall>
                                        <Routes />
                                    </Column>
                                </Row>
                            </div>
                        </BrowserRouter>
                    </JssProvider>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default App;
