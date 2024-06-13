import { useState } from 'react'

function MyForm() {
    const [inputs, setInputs] = useState({});
    // const [textarea, setTextarea] = useState(
    //     "The content of a textarea goes in the value attribute"
    // );
    // const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    // const handleChange1 = (e) => {
    //     setTextarea(e.target.value)
    // }

    // const handleChange2 = (e) => {
    //     setMyCar(e.target.value)
    // }

    return (
        <form className='ded' onSubmit={handleSubmit}>
            <h1>React Form</h1>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <textarea name="content" value={inputs.textarea} onChange={handleChange} />
            <select name="brand" value={inputs.myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
            <input type="submit" />
        </form>
    )
}

export default MyForm