import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../../@types/redux'
import TodoListServices from '../services/todo'
import { ITodo } from '../types'

export const getAllTodosThunk = createAsyncThunk<
	ITodo[],
	void,
	{
		state: RootState
	}
>('todos/getAll', async () => {
	const res = await TodoListServices.getAll()
	return res.response.todos
})
