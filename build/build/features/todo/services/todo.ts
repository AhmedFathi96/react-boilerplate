import { IApiResponse } from '../../../@types/api'
import api from '../../../api'
import { ITodoApiResponse } from '../types'

class TodoListApis {
	getAll(): Promise<IApiResponse<ITodoApiResponse>> {
		return api.get('todos')
	}
}

const TodoListService = new TodoListApis()
export default TodoListService
