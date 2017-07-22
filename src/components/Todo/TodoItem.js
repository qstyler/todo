import React, { Component } from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';

class TodoItem extends Component {
    render() {
        const { id, text, completed, createdAt, completedAt } = this.props;
        const renderDate = (date) => moment.unix(date).format('Do MMM YYYY @ HH:mm');

        return (
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => this.props.onToggle(id)}
                />
                <div>{text}</div>
                <div>{renderDate(createdAt)}</div>
                {completedAt ? <div>{renderDate(completedAt)}</div> : null}
            </label>
        );
    }
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    onToggle: PropTypes.func,
    createdAt: PropTypes.number,
    completedAt: PropTypes.number,
};
TodoItem.defaultProps = {
    onToggle: () => {},
    completed: false,
};

export default TodoItem;