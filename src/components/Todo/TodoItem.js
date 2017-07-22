import React, { Component } from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';

import injectSheet from './Styles';

class TodoItem extends Component {
    render() {
        const {
            id, text, completed, createdAt, completedAt, classes,
        } = this.props;

        const renderDate = (completed, created) => {
            return (completed ? 'Completed at ' : 'Created at ')
                + moment.unix(completed || created).format('Do MMM YYYY @ HH:mm');
        };

        const className = `${classes.todo} ${completed ? classes.todoCompleted : ''}`;

        return (
            <label className={className}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => this.props.onToggle(id)}
                />
                <div>
                    <p>{text}</p>
                    <p className={classes.todoSubtext}>{renderDate(completedAt, createdAt)}</p>
                </div>
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

export default injectSheet(TodoItem);