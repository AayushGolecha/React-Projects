import {useState} from 'react'

const Flipcoin=()=>{
    const [count, setCount]=useState(0)
    const [check, setCheck]=useState(false)
    const [url, setUrl]=useState('')
    const [headCount, setHeadCount]=useState(0)
    const [tailCount, setTailCount]=useState(0)
    const [result, setResult]=useState('')
    const handleFlip=()=>{
        if(count<5){
            let options=["head","tail"]
            let ran=options[Math.floor(Math.random() * options.length)]
            console.log(ran)
            if(ran==='head'){
                setUrl('https://qph.cf2.quoracdn.net/main-qimg-e0e0099a4e81c40def6da0742c9201b5-lq')
                setHeadCount(headCount+1)
            }
            else{
                setUrl('https://qph.cf2.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26-lq')
                setTailCount(tailCount+1)
            }
            setCheck(true)
            setCount(count+1)
        }
        else{
            setCheck(false)
            setCount(0)
            setHeadCount(0)
            setTailCount(0)
            if(headCount>tailCount){
                setResult('Result : Head has more count')
            }
            else{
                setResult('Result : Tail has more count')
            }
            setTimeout(()=>{
                setResult('')
            },2000)
        }
    }
    return(
        <div className='flip'>
            {check ? <img src={url} alt='coin'/>:[]}
            <button onClick={handleFlip}>Flip Me</button>
            <p>Coin Flipped : {count}</p>
            <p>Head Count : {headCount}</p>
            <p>Tail Count : {tailCount}</p>
            <p>{result}</p>
        </div>
    )
}
export default Flipcoin