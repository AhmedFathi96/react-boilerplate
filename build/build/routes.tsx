import { Suspense, lazy } from 'react'
import type { RouteObject } from 'react-router'
import MainLayout from './layouts/mainLayout'

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
	(
		<Suspense fallback={<Todo />}>
			<Component {...props} />
		</Suspense>
	)

// Import your page components
const Todo = Loadable(lazy(() => import('./features/todo')))

const routes: RouteObject[] = [
	{
		path: '*',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Todo />,
			},
		],
	},
]

export default routes
