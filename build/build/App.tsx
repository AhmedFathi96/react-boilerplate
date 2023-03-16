import React from 'react'
import { useRoutes } from 'react-router-dom'
// import logo from '../public/assets/images/image.jpeg'
import './App.scss'
import routes from './routes'

function App() {
	console.log('App==================>')

	const content = useRoutes(routes)
	return content
}

export default App
