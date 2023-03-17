import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../../@types/redux'
import { ITodo } from '../types'
import TodoListServices from '../services/todo'

export const createTodoThunk = createAsyncThunk<
	ITodo,
	ITodo,
	{
		state: RootState
	}
>('todos/addTodo', async (data: ITodo) => {
	const res = await TodoListServices.create(data)
	console.log('=======================>', res)
	return res.response
})
