import uuid from 'uuid'

export const addTodo = ({
    description,
    completed = false

}) => ({
    type: 'ADD_TODO',
    todo: {
        description,
        id: uuid(),
        completed
    }
})

export const removeTodo = ({id}) => ({
    type: 'REMOVE_TODO',
    id
})

export const toggleCompleted = (id, completed) => ({
    type: 'TOGGLE_COMPLETED',
    id,
    completed: !completed
})