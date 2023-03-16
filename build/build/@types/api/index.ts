export type TServerError = { parameter: string; message: string }

export interface IServerError {
	message: string
	code: string
	unknownProperty?: string
	action?: string
	errors: TServerError[]
}

export interface IApiResponse<T> {
	response: T
	error: IServerError
}
