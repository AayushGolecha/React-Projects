import { configureStore } from '@reduxjs/toolkit'
import countReducer from './countSlice'

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    count: countReducer,
  },
})