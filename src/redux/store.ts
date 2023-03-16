import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'development' ? false : true,
})

export default store
