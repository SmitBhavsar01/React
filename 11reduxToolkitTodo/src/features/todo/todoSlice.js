import { createSlice, nanoid } from '@reduxjs/toolkit'

const getInitialTodos = () => {
  const localData = localStorage.getItem('todos')
  return localData ? JSON.parse(localData) : []
}
export const todoSlice = createSlice({

    name: 'todo',
    initialState: {
        todos: getInitialTodos()
    },
    reducers: {
        addTodo: (state, action) => {
            const newtodo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(newtodo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo => todo.id !== action.payload))
        },

        toogleCompleted: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },

        updateTodo(state, action) {
            const { id, text } = action.payload;
            const existingTodo = state.todos.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.text = text;
            }
        }
    }
})


export const { addTodo, removeTodo, updateTodo, toogleCompleted, } = todoSlice.actions
export default todoSlice.reducer 