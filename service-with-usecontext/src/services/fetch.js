export const GetData=async ()=>{
    return await fetch('https://fakestoreapi.com/products/').then(res =>res.json())
}