import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        const { id, text, completed } = this.props;
        return (
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => this.props.onToggle(id)}
                />
                {text}
            </label>
        );
    }
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    onToggle: PropTypes.func,
};
TodoItem.defaultProps = {
    onToggle: () => {},
    completed: false,
};

export default TodoItem;