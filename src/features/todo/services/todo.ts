import { IApiResponse } from '../../../@types/api'
import api from '../../../api'
import { ITodo, ITodoApiResponse } from '../types'

class TodoListApis {
	getAll(): Promise<IApiResponse<ITodoApiResponse>> {
		return api.get('todos')
	}
	create(todo: ITodo): Promise<IApiResponse<ITodo>> {
		return api.post('todos/add', todo)
	}
	delete(todoId: number): Promise<IApiResponse<ITodo>> {
		return api.delete(`todos/${todoId}`)
	}
}

const TodoListService = new TodoListApis()
export default TodoListService
