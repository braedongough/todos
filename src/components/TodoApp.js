import React from 'react'
import { Provider } from 'react-redux'
import Header from './Header'
import Filters from './Filters'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import store from '../store/configureStore'

export default () => (
    <Provider store={store}>
        <div>
            <Header />
            <Filters />
            <TodoList />
            <AddTodoForm />
        </div>
    </Provider>
)