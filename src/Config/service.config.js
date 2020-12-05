import Axios from 'axios';

const api = Axios.create({
	baseURL: 'https://api.chucknorris.io/jokes',
});

export { api };