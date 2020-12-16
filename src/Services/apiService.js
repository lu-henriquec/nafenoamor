import { api } from '../Config/service.config';

const getCards = async () => {
  try {
		const data = await api.get('/api.php')

		return data;
	}
	catch (err) {
		throw new Error(err);
	}
};

const getFrases = async () => {
  try {
		const data = await api.get('/api_frase.php')

		return data;
	}
	catch (err) {
		throw new Error(err);
	}
};

const saveCard = async (card) => {
  try {
		const send = await api.post('/api_add.php', {}, {
			params: card
		});

		return send;
	}
	catch (err) {
		throw new Error(err);
	}
};

export { getCards, saveCard, getFrases };
