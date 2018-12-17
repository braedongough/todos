const filtersDefaultState = {
    text: '',
    hideCompletedTodos: false
}

export default (state, action) => {
    switch (action.type) {
        case 'SET_TEXT-FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_VISIBILITY_FILTER':
        return {
            ...state,
            hideCompletedTodos: !state.hideCompletedTodos
        }
        default:
            return filtersDefaultState
    }
}