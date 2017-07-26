import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { startSetTodoCompleted } from '../../actions/actions';

import injectSheet from './Styles';

export class TodoItem extends Component {
    render() {
        const {
            id, text, completed, createdAt, completedAt, classes, dispatch
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
                    onChange={() => dispatch(startSetTodoCompleted(id, !completed))}
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
    createdAt: PropTypes.number,
    completedAt: PropTypes.number,
};
TodoItem.defaultProps = {
    completed: false,
};

export default connect()(injectSheet(TodoItem));