import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../counterSlice'
import hiddenReducer from '../hideSlice'

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
    reducer: {
        counter: counterReducer,
        hide: hiddenReducer,
    },
})