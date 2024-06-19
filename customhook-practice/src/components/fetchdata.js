import useFetch from './useFetch'

const Data = () => {
    const [data] = useFetch('https://jsonplaceholder.org/posts?id=1')
    return (
        <div>
            <h1>The data fetch is below</h1>
            {data && data.map((item) => {
                return <span>{item.title}</span>
            })}
        </div>
    )
}
export default Data