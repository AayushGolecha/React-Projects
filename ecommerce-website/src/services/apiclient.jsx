import axios from 'axios'

export const getData = async () => {
    const response = await axios.get('https://6673e38f75872d0e0a942914.mockapi.io/fake')
    return response.data
}

export const getProduct = async (id) => {
    const response = await axios.get(`https://6673e38f75872d0e0a942914.mockapi.io/fake/${id}`)
    return response.data
}
