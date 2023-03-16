import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../../@types/redux'
import TodoListServices from '../services/todo'
import { ITodo } from '../types'
import { toggleIsTodoListDataLoaded } from './slice'

export const getAllTodosThunk = createAsyncThunk<
	ITodo[],
	void,
	{
		state: RootState
	}
>('todos/getAll', async (_, thunkAPI) => {
	thunkAPI.dispatch(toggleIsTodoListDataLoaded(false))

	const { response, error } = await TodoListServices.getAll()
	if (response) {
		console.log('==================>', response)
	}
	if (error) {
		console.log(error)
	}
	thunkAPI.dispatch(toggleIsTodoListDataLoaded(true))
	return response.todos
})
