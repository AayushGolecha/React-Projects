import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './couterSlice'
 
// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})