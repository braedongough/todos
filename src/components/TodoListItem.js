import React from 'react'
import { startRemoveTodo, startToggleCompleted } from '../actions/todos'
import { connect } from 'react-redux'


const TodoListItem = ({ description, completed, toggleCompleted, startRemoveTodo, id }) => {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => {
                        toggleCompleted(id, completed)
                    }}
                />
                {description}
                <button onClick={() => {
                    startRemoveTodo(id)
                }}>Remove Todo</button>
            </label>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startRemoveTodo: (id) => { dispatch(startRemoveTodo(id)) },
    toggleCompleted: (id, completed) => { dispatch(startToggleCompleted(id, completed)) }
})

export default connect(undefined, mapDispatchToProps)(TodoListItem)