import axios from 'axios'

export const postData = async ( name, price, imageUrl) => {
    await axios.post('https://6673e38f75872d0e0a942914.mockapi.io/fake', { name, price, imageUrl})
}

export const getData = async () => {
    const response = await axios.get('https://6673e38f75872d0e0a942914.mockapi.io/fake')
    return response.data
}

export const putData = async (id,  name, price, imageUrl) => {
    await axios.put(`https://6673e38f75872d0e0a942914.mockapi.io/fake/${id}`, { name, price, imageUrl })
}

export const deleteData = async (id) => {
    await axios.delete(`https://6673e38f75872d0e0a942914.mockapi.io/fake/${id}`)
}