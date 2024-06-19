import { useCallback, useState,useMemo } from 'react'
import Check from './check'

const Parent = () => {
    const [check, setCheck] = useState(1000)
    const [add, setAdd] = useState(0)
    const calculate= useMemo(()=>counter(add),[add])
    const handleChange = useCallback(() => {
        setCheck(check-100)
    },[check])
    const handleAdd = () => {
        setAdd(add + 1)
        console.log('clicked')
    }
    
    return (
        <>
            <p>{add}</p>
            <button onClick={handleAdd}>Add</button>
            <Check check={check} change={handleChange} />
            <p>{calculate}</p>
        </>
    )
}
export default Parent

const counter=(num)=>{
    console.log('click')
    for(let i=0;i<1000000000;i++){
        num += 1
    }
    return num
}