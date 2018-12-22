import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
import todos from '../../testConfig/fixtures';
import {
    addTodo,
    startAddTodo,
    removeTodo,
    startRemoveTodo,
    toggleCompleted,
    startToggleCompleted,
    setTodos,
    startSetTodos
} from '../todos';

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
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

it('should update completed property in firebase and store', (done) => {
    const store = createMockStore({})
    const id = 1, completed = true
    store.dispatch(startToggleCompleted(id, completed)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'TOGGLE_COMPLETED',
            id,
            completed: !completed
        })
    })
    database.ref(`todos/${id}`).once('value').then((snapshot) => {
        expect(snapshot.val().completed).toBe(!completed)
        done()
    })
})

it('should generate setTodos action object', () => {
    const action = setTodos(todos)
    expect(action).toEqual({
        type: 'SET_TODOS',
        todos
    })
})

it('should fetch the todos from  firebase', (done) => {
    const store = createMockStore({})
    store.dispatch(startSetTodos()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_TODOS',
            todos
        })
        done()
    })
})