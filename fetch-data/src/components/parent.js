import Child from './child'
import './style.css'
import { useRef } from 'react'

const Parent = () => {
    const ref=useRef()
    return (
        <div>
            <button onClick={() => ref.current.data()}>Display Data</button>
            <Child ref={ref}/>
        </div>
    );
}
export default Parent