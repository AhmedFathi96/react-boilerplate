import { Alert } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { getAllTodosThunk } from './redux/getAllTodosThunk'
// import styles from './styles.module.scss'

const TodoList: React.FC = () => {
	const dispatch = useAppDispatch()
	// rome-ignore lint/nursery/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		dispatch(getAllTodosThunk())
	}, [])

	return (
		<div>
			<Alert severity="info">This is an info alert — check it out!</Alert>
			<Outlet />
		</div>
	)
}

export default TodoList
