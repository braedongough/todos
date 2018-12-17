import { createStore, combineReducers } from 'redux'
import TodoReducer from '../reducers/todos-reducer'
import FiltersReducer from '../reducers/filters-reducer'

const configureStore = () => {
    const store = createStore(
        combineReducers({
            todos: TodoReducer,
            filters: FiltersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}

const store = configureStore()

export default store