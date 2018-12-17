//Get visible todos

export default (todos, { text, hideCompletedTodos }) => {
    return todos.filter((todo) => {
        const textMatch = todo.description.includes(text.toLowerCase())
        const visibilityToggle = hideCompletedTodos ? !todo.completed : true
        return textMatch && visibilityToggle
    })
}