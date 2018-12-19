import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
import {
    addTodo,
    startAddTodo,
    removeTodo,
    startRemoveTodo,
    toggleCompleted
} from '../todos';

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const todos = [{
        description: 'todo1',
        completed: true
    }, {
        description: 'todo2',
        completed: false
    }, {
        description: 'todo3',
        completed: true
    }]
    database.ref('todos').set(todos).then(() => done())
})

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

it('should add todo to database and store', (done) => {
    const store = createMockStore({})
    const todoData = {
        description: 'clean house',
        completed: false
    }
    store.dispatch(startAddTodo(todoData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_TODO',
            todo: {
                id: expect.any(String),
                ...todoData
            }
        })
        return database.ref(`todos/${actions[0].todo.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(todoData)
        done()
    })
})

it('should generate removeTodo action object', () => {
    const action = removeTodo({ id: '123' })
    expect(action).toEqual({
        type: 'REMOVE_TODO',
        id: '123'
    })
})

it('should remove todo from database and store', (done) => {
    const store = createMockStore({})
    const id = 0
    store.dispatch(startRemoveTodo(id)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_TODO',
            id
        })
    })
    database.ref(`todos/${id}`).once('value').then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
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