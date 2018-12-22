import database from '../firebase/firebase'

export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo
})

export const startAddTodo = (todoData = {}) => {
    return async (dispatch) => {
        const {
            description,
            completed = false
        } = todoData
        const todo = { description, completed }
        const ref = await database.ref('todos').push(todo)
        dispatch(addTodo({ id: ref.key, ...todo }))
    }
}

export const removeTodo = ({ id }) => ({
    type: 'REMOVE_TODO',
    id
})

export const startRemoveTodo = (id) => {
    return async (dispatch) => {
        await database.ref(`todos/${id}`).remove()
        dispatch(removeTodo({ id }))
    }
}

export const toggleCompleted = (id, completed) => ({
    type: 'TOGGLE_COMPLETED',
    id,
    completed: !completed
})

export const startToggleCompleted = (id, completed) => {
    return async (dispatch) => {
        await database.ref(`todos/${id}/`).update({ completed: !completed })
        dispatch(toggleCompleted(id, completed))
    }
}

export const setTodos = (todos) => ({
    type: 'SET_TODOS',
    todos
})

export const startSetTodos = () => {
    return async (dispatch) => {
        const snapshot = await database.ref('todos').once('value')
        const todos = []
        snapshot.forEach((childSnapshot) => {
            todos.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        dispatch(setTodos(todos))
    }
}