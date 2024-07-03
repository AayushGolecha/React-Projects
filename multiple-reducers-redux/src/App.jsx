import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'
import { change } from './hideSlice'
import './App.css'

function App() {
  const count = useSelector(state => state.counter.value)
  const val = useSelector(state => state.hide.value)
  const dispatch = useDispatch()
  return (
    <div className='flex'>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch(change())}>{val ? "Hide Text":"Reveal Text"}</button>
        {val ? <p>Hi, I am the text</p>:''}
      </div>
    </div>
  )
}

export default App
