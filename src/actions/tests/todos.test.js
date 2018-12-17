import { addTodo, removeTodo, toggleCompleted } from '../todos';

it('should generate addTodo action object', () => {
    const todo = {
        description: 'this is a todo',
        id: '0',
        completed: true
    }
    const action = addTodo(todo)
    expect(action).toEqual({
        type: 'ADD_TODO',
        todo: todo
    })
})

it('should generate removeTodo action object', () => {
    const action = removeTodo({ id: '123' })
    expect(action).toEqual({
        type: 'REMOVE_TODO',
        id: '123'
    })
})

it('should generate toggleCompleted action object', () => {
    const action = toggleCompleted('abc123', true)
    expect(action).toEqual({
        type: 'TOGGLE_COMPLETED',
        id: 'abc123',
        completed: false
    })
})