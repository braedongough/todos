const todoDefaultState = []

export default (state = todoDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ]
        case 'REMOVE_TODO':
            return state.filter(({ id }) => id !== action.id)
        case 'TOGGLE_COMPLETED':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: action.completed
                    }
                } else {
                    return todo
                }
            })
        default:
            return state
    }
}

