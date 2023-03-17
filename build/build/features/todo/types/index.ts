export interface ITodo {
	id: number
	todo: string
	completed: boolean
	userId: number
}
export interface ITodoState {
	isLoading: boolean
	hasError: boolean
	error: string
	todos: ITodo[]
}

export interface ITodoApiResponse {
	todos: ITodo[]
	total: number
}
