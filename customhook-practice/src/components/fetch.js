import useFetch from './useFetch'

const Data1 = () => {
    const [data] = useFetch('https://jsonplaceholder.org/posts?id=1')
    return (
        <div>
            <h1>Data Fetched</h1>
            {data && data.map((item) => {
                return <span>{item.title}</span>
            })}
        </div>
    )
}
export default Data1