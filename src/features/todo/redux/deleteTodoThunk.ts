import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../../@types/redux'
import { ITodo } from '../types'
import TodoListServices from '../services/todo'

export const deleteTodoThink = createAsyncThunk<
	ITodo,
	number,
	{
		state: RootState
	}
>('todo/deleteTodo', async (data: number) => {
	const res = await TodoListServices.delete(data)
	console.log('deleteTodo=======================>', res)
	return res.response
})
