import { createBrowserRouter } from 'react-router-dom'
import Todo from './features/todo'
import AddTodo from './features/todo/components/addTodo'
import ListTodo from './features/todo/components/listTodo'

// Import your page components
// const TodoComponent = React.lazy(() => import('./features/todo'))

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Todo />,
		children: [
			{
				path: 'add-todo',
				element: <AddTodo />,
			},
			{
				path: 'list-todo',
				element: <ListTodo />,
			},
		],
	},
])

export default routes
