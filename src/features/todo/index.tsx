import { Alert, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import AddTodo from './components/addTodo'
import { getAllTodosThunk } from './redux/getAllTodosThunk'
import styles from './styles.module.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import { ITodo } from './types'
import { deleteTodoThink } from './redux/deleteTodoThunk'

const TodoList: React.FC = () => {
	const dispatch = useAppDispatch()
	const { todos, isLoading } = useAppSelector((state) => state.todo)
	// rome-ignore lint/nursery/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		dispatch(getAllTodosThunk())
	}, [])

	const deleteTodo = (id: number) => {
		dispatch(deleteTodoThink(id))
	}

	return (
		<div className={styles.todoWrapper}>
			<AddTodo />

			{!isLoading &&
				todos.map((todo: ITodo) =>
					todo.completed ? (
						<Alert className={styles.item} severity="success">
							<div className={styles.contentWrapper}>
								<span> {todo.todo}</span>
								<IconButton
									aria-label="delete"
									onClick={() => {
										deleteTodo(todo.id!)
									}}
								>
									<DeleteIcon />
								</IconButton>
							</div>
						</Alert>
					) : (
						<Alert className={styles.item} severity="warning">
							<div className={styles.contentWrapper}>
								<span> {todo.todo}</span>
								<IconButton
									aria-label="delete"
									onClick={() => {
										deleteTodo(todo.id!)
									}}
								>
									<DeleteIcon />
								</IconButton>
							</div>
						</Alert>
					),
				)}

			<Outlet />
		</div>
	)
}

export default TodoList
