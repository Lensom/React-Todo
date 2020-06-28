import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }
        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}
                >
                    {label}
                </span>

                <div className="todo__btn--wrapper">
                    <button type="button" onClick={onToggleImportant} className="btn btn-outline-success btn-sm"><i className="fa fa-exclamation"></i></button>
                    <button type="button" onClick={onDeleted} className="btn btn-outline-danger btn-sm"><i className="fa fa-trash-o"></i></button>
                </div>
            </span>
        );
    }
}