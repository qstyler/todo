import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        const { id, text } = this.props;
        return (
            <div>
                <div>{id}. {text}</div>
            </div>
        );
    }
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};
TodoItem.defaultProps = {};

export default TodoItem;