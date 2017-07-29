import React, { Component } from 'react';
import ExternalSpinner from 'react-spinkit';

import injectSheet from './Styles';

class Spinner extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.spinner}>
                <ExternalSpinner name="ball-scale-multiple" fadeIn="half" color="#93c3e2" />
                <div />
            </div>
        );
    }
}

// noinspection JSUnusedGlobalSymbols
export default injectSheet(Spinner);