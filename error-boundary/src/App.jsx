/* eslint-disable react/prop-types */
import './App.css'
import {ErrorBoundary} from 'react-error-boundary'
import { useState } from 'react'

// const State=({name})=>{
//   // eslint-disable-next-line react/prop-types
//   try{
//     return <div>The Capital of {name.toUpperCase()}</div>
//   } catch(error){
//     return <ErrorHandler error={error} />
//   }
// }

// const Capital=({capital})=>{
//   try{
//     // eslint-disable-next-line react/prop-types
//     return <div>Hello Visit, {capital.toUpperCase()}</div>
//   } catch(error){
//     return <ErrorHandler error={error} />
//   }
// }

// // eslint-disable-next-line react/prop-types
// const ErrorHandler=({error})=>{
//   return(
//     <div>
//       <p>An Error Occured:</p>
//       {/* eslint-disable-next-line react/prop-types */}
//       <p>{error.message}</p>
//     </div>
//   )
// }

// function App() {

//   return (
//     <>
//       <div>
//         <Capital capital="Jaipur"/>
//         <State name="Rajasthan"/>
//       </div>
//     </>
//   )
// }

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function Bomb() {
  throw new Error('💥 CABOOM 💥')
}

function App() {
  const [explode, setExplode] = useState(false)
  return (
    <div>
      <button onClick={() => setExplode(e => !e)}>toggle explode</button>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setExplode(false)}
        resetKeys={[explode]}
      >
        {explode ? <Bomb /> : null}
      </ErrorBoundary>
    </div>
  )
}

export default App
