import { useReducer } from 'react'
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment': {
      return { ...state, count: state.count + 1 }
    }
    case 'Decrement': {
      return { ...state, count: state.count - 1 }
    }
    case 'Hide': {
      return { ...state, hide: !state.hide }
    }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, hide: false })
  return (
    <div className="App">
      <p>{state.count}</p>
      <button onClick={() => { dispatch({ type: 'Increment' }) }}>Increment</button>
      <button onClick={() => { dispatch({ type: 'Decrement' }) }}>Decrement</button>
      <button onClick={() => { dispatch({ type: 'Hide' }) }}>{state.hide ? 'Reveal' : 'Hide'}</button>
      {state.hide ? [] : <p>Not Hidden</p>}
    </div>
  );
}
export default App;