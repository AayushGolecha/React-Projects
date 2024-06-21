import { useState } from 'react'
import Button from './button'
import Box from './box'

const Game = () => {
    const [user, setUser] = useState(0)
    const [computer, setComputer] = useState(0)
    const [userInput, setUserInput] = useState('')
    const [compInput, setCompInput]=useState('')
    const [result, setResult]=useState('')
    const [count, setCount]=useState(1)
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const input = choices[Math.floor(Math.random() * choices.length)];
    const handleComp = () => {
        setCompInput(input)
        setCount(count+1)
        console.log(userInput, compInput)
        if(count<=5){
            if(userInput === compInput){
                setUser(user);
                setComputer(computer)
            } else if ((userInput === "ROCK" && compInput === "SCISSORS") ||
                (userInput === "SCISSORS" && compInput === "PAPER") ||
                (userInput === "PAPER" && compInput === "ROCK")
            ) {
                setUser(user+1);
            } else {
                setComputer(computer+1)
            }
        }
        else if(user > computer){
            setResult('User Won')
        }
        else if(user < computer){
            setResult('Computer Won')
        }
        else{
            setResult('Draw')
        }
        console.log(count)
    }
    
    return (
        <>
            <div className='btn'>
                <Button value={"ROCK"} input={setUserInput} onclick={handleComp} compInput={compInput}/>
                <Button value={"PAPER"} input={setUserInput} onclick={handleComp} compInput={compInput}/>
                <Button value={"SCISSORS"} input={setUserInput} onclick={handleComp} compInput={compInput}/>
            </div>
            <Box name={'Your Choice'} value={userInput} />
            <Box name={'Computer Choice'} value={compInput} />
            <Box name={'Your Score is'} value={user} />
            <Box name={'Computer Score is'} value={computer} />
            <div>{result}</div>
        </>
    )
}
export default Game