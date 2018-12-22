import React from 'react'
import { connect } from 'react-redux'
import { startAddTodo } from '../actions/todos'

export const AddTodoForm = ({ startAddTodo }) => (
    <div>
        <form
            autoComplete='off'
            onSubmit={(e) => {
                e.preventDefault()
                const description = e.target.todo.value
                startAddTodo({ description })
                e.target.todo.value = ''
            }}>
            <input
                type="text"
                placeholder="input new todo"
                name="todo"
                autoFocus={true}
            />
            <button>Submit</button>
        </form>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startAddTodo: (todoData) => dispatch(startAddTodo(todoData))
})

export default connect(undefined, mapDispatchToProps)(AddTodoForm)