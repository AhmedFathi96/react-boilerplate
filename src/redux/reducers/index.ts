import todoReducer from '../../features/todo/redux/slice'
import { reducer as formReducer } from 'redux-form'

export const rootReducer = {
	todo: todoReducer,
	form: formReducer,
}
