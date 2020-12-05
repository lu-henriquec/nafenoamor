import TYPES_ACTION from './types';

export function setFormData(payload) {
	return { type: TYPES_ACTION.SET_FORMDATA, payload };
}
