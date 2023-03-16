import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo, ITodoState } from '../types'
import { getAllTodosThunk } from './thunks'

const initialState = {
	isLoading: false,
	todos: [],
} as ITodoState

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<ITodo>) {
			state.todos.push(action.payload)
		},
		removeTodo(state, action: PayloadAction<number>) {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload)
		},
		toggleIsTodoListDataLoaded(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAllTodosThunk.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
			state.todos = action.payload
		})
	},
})

export const { addTodo, removeTodo, toggleIsTodoListDataLoaded } = todoSlice.actions
export default todoSlice.reducer
