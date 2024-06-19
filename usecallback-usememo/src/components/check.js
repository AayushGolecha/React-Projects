import { memo } from 'react'

const Check = ({ check, change }) => {
    console.log('hello')
    return (
        <>
            <p>I am {check} boolean.</p>
            <button onClick={change}>Change Me</button>
        </>
    )
}
export default memo(Check)