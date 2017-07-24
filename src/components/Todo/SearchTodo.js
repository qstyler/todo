import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    toggleSearchAll as toggleSearchAllAction,
    setSearchText as setSearchTextAction,
} from '../../actions/actions';


import injectSheet from './Styles';

export class SearchTodo extends Component {

    render() {
        const { placeholder, classes, dispatch } = this.props;
        return (
            <div className={classes.containerHeader}>
                <div>
                    <input
                        type="search"
                        ref="searchText"
                        placeholder={placeholder}
                        onChange={() => dispatch(setSearchTextAction(this.refs.searchText.value))}
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            ref="searchAll"
                            onChange={() => dispatch(toggleSearchAllAction())}
                        />
                        Show all items
                    </label>
                </div>
            </div>
        );
    }
}

SearchTodo.propTypes = {
    placeholder: PropTypes.string,
};
SearchTodo.defaultProps = {
    placeholder: 'Search todos'
};

export default connect()(injectSheet(SearchTodo));