import TYPES_ACTION from './types';

const INITIAL_STATE = {
	cards: []
};

export default function cardReducer(state = INITIAL_STATE, { type, payload }) {
	switch (type) {
	case TYPES_ACTION.SET_CARD:
		return {
			...state,
			cards: payload
		}
	default:
		return state;
	}
}
