import {useOutletContext} from 'react-router-dom'

const Contact = () => {
    const [data] = useOutletContext()
    return (
        <div>
            <h2>Contact of {data}</h2>
            <p>This is a Contact page</p>
        </div>
    )
}

export default Contact