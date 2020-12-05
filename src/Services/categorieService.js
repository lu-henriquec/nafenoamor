import { api } from '../Config/service.config';

const getCategories = async () => {
  try {
		const data = await api.get('/categories')

		return data;
	}
	catch (err) {
		throw new Error(err);
	}
};

const getJoke = async (category) => {
  try {
		const data = await api.get('/random', {
      params: { category }
    });

		return data;
	}
	catch (err) {
		throw new Error(err);
	}
};

export { getCategories, getJoke };
