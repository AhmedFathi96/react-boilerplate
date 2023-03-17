import { TextField } from '@mui/material'
import { WrappedFieldProps } from 'redux-form'
import style from './styles.module.scss'

export const RenderTextField = (field: WrappedFieldProps) => (
	<TextField id="outlined-basic" label="Todo" {...field.input} variant="outlined" className={style.inputField} />
)
