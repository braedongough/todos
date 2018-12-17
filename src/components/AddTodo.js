import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

const addTodoForm = ({ dispatch }) => (
    <div>
        <form 
        autoComplete='off'
        onSubmit={(e) => {
            e.preventDefault()
            const description = e.target.todo.value
            dispatch(addTodo({ description }))
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

export default connect()(addTodoForm)