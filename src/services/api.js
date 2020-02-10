import axios from 'axios' 

const api = axios.create({
    // baseURL: 'https://swapi.co/api'
    baseURL: 'http://fipeapi.appspot.com/api/1/carros/marcas.json'
    
})

export default api 