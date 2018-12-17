import React from 'react'
import { setTextFilter, setVisibilityFilter } from '../actions/filters'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    hideCompletedTodos: state.filters.hideCompletedTodos
})

const Filters = ({ dispatch, hideCompletedTodos }) => (
    <div>
        <input
            type="text" 
            autoComplete="off" 
            placeholder="Filter todo"
            name="filters"
            onChange={(e) => {
                const text = e.target.value
                dispatch(setTextFilter(text))
            }}
        />
        <label>
            <input 
            id="hide-complete" 
            type="checkbox" 
            checked={hideCompletedTodos}
            onChange={() => {
                dispatch(setVisibilityFilter())
            }}
            /> 
            Hide Completed todos
        </label>
    </div>
)

export default connect(mapStateToProps)(Filters)