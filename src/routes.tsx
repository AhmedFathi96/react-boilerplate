import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Todo from './features/todo'
import AddTodo from './features/todo/components/addTodo'
import ListTodo from './features/todo/components/listTodo'

// Import your page components
// const TodoComponent = React.lazy(() => import('./features/todo'))

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Todo />,
	},
	{
		path: '/add-todo',
		element: <AddTodo />,
	},
	{
		path: '/list-todo',
		element: <ListTodo />,
	},
])
function Router() {
	return <RouterProvider router={routes} />
}
export default Router
