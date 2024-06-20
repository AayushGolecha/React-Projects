import axios from 'axios'

export const postData = async (firstName, lastName) => {
    await axios.post('https://6673e38f75872d0e0a942914.mockapi.io/fake', { firstName, lastName })
}

export const getData = async () => {
    const response = await axios.get('https://6673e38f75872d0e0a942914.mockapi.io/fake')
    return response.data
}

export const putData = async (id, firstName, lastName) => {
    await axios.put(`'https://6673e38f75872d0e0a942914.mockapi.io/fake'/${id}`, { firstName, lastName })
}

export const deleteData = async(id) => {
    await axios.delete(`https://6673e38f75872d0e0a942914.mockapi.io/fake/${id}`)
}