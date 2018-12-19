import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import TodoReducer from '../reducers/todos-reducer'
import FiltersReducer from '../reducers/filters-reducer'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
    const store = createStore(
        combineReducers({
            todos: TodoReducer,
            filters: FiltersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}

const store = configureStore()

export default store