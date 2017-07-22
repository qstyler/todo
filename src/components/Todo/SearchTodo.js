import React, { Component } from 'react'
import PropTypes from 'prop-types';

class SearchTodo extends Component {


    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        const searchText = this.refs.searchText.value.trim();
        const searchAll = this.refs.searchAll.checked;

        this.props.onChanged(searchText, searchAll);
    }

    render() {
        const { placeholder } = this.props;
        return (
            <div>
                <div>
                    <input
                        type="search"
                        ref="searchText"
                        placeholder={placeholder}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            ref="searchAll"
                            onChange={this.handleChange}
                        />
                        Show all items
                    </label>
                </div>
            </div>
        );
    }
}

SearchTodo.propTypes = {
    onChanged: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
SearchTodo.defaultProps = {
    placeholder: 'Search todos'
};

export default SearchTodo;