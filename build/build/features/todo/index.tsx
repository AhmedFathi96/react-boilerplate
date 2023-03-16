import React, { useCallback, useEffect } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { getAllTodosThunk } from './redux/thunks'
import styles from './styles.module.scss'

const TodoList: React.FC = () => {
	const dispatch = useAppDispatch()
	// const { todos } = useAppSelector((state) => state.todo)
	console.log('TodoList==================>')
	// rome-ignore lint/nursery/useExhaustiveDependencies: <explanation>
	const memoizedFetchData = useCallback(() => {
		dispatch(getAllTodosThunk())
	}, [])

	useEffect(() => {
		memoizedFetchData()
	}, [memoizedFetchData])
	return <h1 className={styles.header}>Hello from Todo-List app</h1>
}

export default TodoList
