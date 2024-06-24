import {useOutletContext} from 'react-router-dom'

const Address = () => {
    const [data] = useOutletContext()
    return (
        <div>
            <h2>Address of {data}</h2>
            <p>This is a Address page</p>
        </div>
    )
}

export default Address