import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp'
import { startSetTodos } from './actions/todos'
import store from './store/configureStore';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(<TodoApp />, document.getElementById('app'));
        hasRendered = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetTodos()).then(() => {
    renderApp()
})