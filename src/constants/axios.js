import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	timeout: 10000,
})
