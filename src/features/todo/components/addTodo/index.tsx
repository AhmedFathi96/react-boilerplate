import { Button } from '@mui/material'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { useAppDispatch } from '../../../../hooks/reduxHooks'
import { RenderTextField } from '../../../../shared/components/form/inputField'
import { createTodoThunk } from '../../redux/createTodoThunk'
import { ITodoFormData } from '../../types/addTodo'
import style from './styles.module.scss'

const AddTodo: React.FC<InjectedFormProps<ITodoFormData>> = (props) => {
	const { handleSubmit, reset } = props

	const dispatch = useAppDispatch()

	const onSubmit = (data: ITodoFormData) => {
		dispatch(
			createTodoThunk({
				todo: data.todo,
				completed: false,
				userId: 5,
			}),
		)
		reset()
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={style.formWrapper}>
			<Field name="todo" component={RenderTextField} className={style.inputField} type="text" />
			<Button type="submit" color="info" disabled={false} className={style.button} size="large" variant="outlined">
				Add Todo
			</Button>
		</form>
	)
}

export default reduxForm<ITodoFormData>({
	form: 'addTodoForm',
})(AddTodo)
