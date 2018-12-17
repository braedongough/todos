import React from 'react'
import TodoListItem from './TodoListItem'
import getVisibleTodos from '../selectors/todos'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.filters)
})

const TodoList = (props) => (
    <div>
        {props.todos.length > 0 ? props.todos.map((todo) => {
            return (
                <TodoListItem
                    key={todo.id}
                    {...todo}
                />
            )
        }) : <p>Enter a todo to get started</p>}
    </div>
)

export default connect(mapStateToProps)(TodoList)