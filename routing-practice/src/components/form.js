import { Link } from "react-router-dom"

const Form = ({ name1, setName1 }) => {
    return (

        <form>
            <label>
                Name:<input type='text' value={name1} onChange={(e) => setName1(e.target.value)} />
            </label>
            <button><Link to={`/about/${name1}`}>Submit</Link></button>
        </form>

    )
}
export default Form