import axios from 'axios'

export const postData = () => {
    const firstName = JSON.parse(localStorage.getItem('firstName'))
    const lastName = JSON.parse(localStorage.getItem('lastName'))
    axios.post('https://6673e38f75872d0e0a942914.mockapi.io/fake', {
        firstName,
        lastName
    })
}

export const getData = async () => {
    const response = await axios.get('https://6673e38f75872d0e0a942914.mockapi.io/fake')
    return response.data
}

export const putData = async (id) => {
    const firstName = JSON.parse(localStorage.getItem('firstName'))
    const lastName = JSON.parse(localStorage.getItem('lastName'))
    await axios.put(`https://6673e38f75872d0e0a942914.mockapi.io/fake/${id}`, {
        firstName,
        lastName
    })
}

export const deleteData = async(id) => {
    await axios.delete(`https://6673e38f75872d0e0a942914.mockapi.io/fake/${id}`)
}