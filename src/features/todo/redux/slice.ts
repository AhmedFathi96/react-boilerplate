import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo, ITodoState } from '../types'
import { createTodoThunk } from './createTodoThunk'
import { deleteTodoThink } from './deleteTodoThunk'
import { getAllTodosThunk } from './getAllTodosThunk'

const initialState = {
	isLoading: false,
	hasError: false,
	error: '',
	todos: [],
} as ITodoState

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<ITodo>) {
			state.todos.push(action.payload)
		},
		deleteTodo(state, action: PayloadAction<number>) {
			console.log('deleteTodo reducer=======================>')
			state.todos = state.todos.filter((todo) => todo.id !== action.payload)
		},
		toggleIsTodoListDataLoaded(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllTodosThunk.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
				state.todos = action.payload
				state.hasError = false
				state.isLoading = false
			})
			.addCase(getAllTodosThunk.pending, (state) => {
				state.hasError = false
				state.isLoading = true
			})
			.addCase(getAllTodosThunk.rejected, (state, action) => {
				state.hasError = true
				state.isLoading = false
				state.error = action.error.message ?? 'An error occurred.'
			})
			.addCase(createTodoThunk.fulfilled, (state, action: PayloadAction<ITodo>) => {
				state.todos.push(action.payload)
				state.hasError = false
				state.isLoading = false
			})
			.addCase(deleteTodoThink.fulfilled, (state, action: PayloadAction<ITodo>) => {
				state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
				state.hasError = false
				state.isLoading = false
			})
	},
})

export const { addTodo, deleteTodo, toggleIsTodoListDataLoaded } = todoSlice.actions
export default todoSlice.reducer
