import Axios from 'axios';

const api = Axios.create({
	baseURL: 'https://audaz.com.br/api_app',
});

export { api };