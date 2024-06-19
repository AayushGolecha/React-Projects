import {useContext} from 'react'
import { ProductContext } from './context';

const ProductData=()=>{
    const data=useContext(ProductContext)
    return(
        <div className='center'>
            {data && data.map((item) => {
                return <p>{item.title}</p>
            })}
        </div>
    )
}
export default ProductData