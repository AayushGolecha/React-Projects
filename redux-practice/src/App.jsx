
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/couterSlice'

function App() {
  const count=useSelector((state)=> state.counter.value)
  const dispatch=useDispatch()
  return (
    <>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <div>{count}</div>
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
    </>
  )
}

export default App
