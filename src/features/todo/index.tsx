import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { getAllTodosThunk } from './redux/thunks'
import styles from './styles.module.scss'

const TodoList: React.FC = () => {
	const dispatch = useAppDispatch()
	// rome-ignore lint/nursery/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		dispatch(getAllTodosThunk())
	}, [])

	return (
		<div>
			<h1 className={styles.header}>Hello from Todo-List app</h1>
			<Outlet />
		</div>
	)
}

export default TodoList
