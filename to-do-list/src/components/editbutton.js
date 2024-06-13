import { useState , useEffect} from "react"
import Msg from './message'

const Edit = (props) => {
    
    const [checked, setChecked] = useState(false)

    // This function handles the input task and set input
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    
    // this function cancels the edit box takes back to the to-do-list
    const Cancel = () => {
        props.setCheck(!props.check)
    }

    // saves the edits and takes back to the to-do-list
    const Save = (i) => {
        const updatedInput = input
        if (updatedInput && updatedInput.trim().length !== 0) {
            const updated = props.tasks.map((e, index) => (index === i ? updatedInput : e))
            props.setTasks(updated)
            localStorage.setItem('tasks', JSON.stringify(updated));
            props.setCheck(!props.check)
        }
        else {
            setChecked(!checked)
        }
    }

    // this block grabs the array and saves the value of current editing in currentValue
    const tasksArr=JSON.parse(localStorage.getItem('tasks'))
    let currentValue
    for(let i=0;i<tasksArr.length;i++){
        if(props.val===i){
            currentValue=tasksArr[i]
        }
    }
    const [input, setInput]=useState(currentValue)

    // checks the input field if empty gives error
    useEffect(()=>{
        if(input !== ""){
            setChecked(false)
        }
    },[input])

    return (
        <div className="flex2">
            <div className='flex1'>
                    <input type='text' value={input} onChange={handleInput}/>
                    <div>{checked ? <Msg /> : []}</div>
            </div>
            <button className="green" onClick={() => Save(props.val)}>Save</button>
            <button className="red" onClick={() => Cancel()}>Cancel</button>
        </div>
    );
}
export default Edit