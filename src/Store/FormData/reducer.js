import TYPES_ACTION from './types';

const INITIAL_STATE = {
	formData: {}
};

export default function formDataReducer(state = INITIAL_STATE, { type, payload }) {
	console.log(state, type, payload);
	switch (type) {
	case TYPES_ACTION.SET_FORMDATA:
		return {
			...state,
			formData: payload
		}
	default:
		return state;
	}
}
