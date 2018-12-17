import React from 'react'
import { removeTodo, toggleCompleted } from '../actions/todos'
import { connect } from 'react-redux'


const TodoListItem = ({ description, completed, dispatch, id }) => {
    return (
        <div>
            <label>
                <input 
                    type="checkbox"
                    checked={completed}
                    onChange={() => {
                        dispatch(toggleCompleted(id, completed))
                    }}
                />
                {description}
                <button onClick={() => {
                    dispatch(removeTodo({ id }))
                }}>Remove Todo</button>
            </label>
        </div>
    )
}

export default connect()(TodoListItem)