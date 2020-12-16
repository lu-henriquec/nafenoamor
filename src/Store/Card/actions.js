import TYPES_ACTION from './types';

export function setCard(payload) {
	return { type: TYPES_ACTION.SET_CARD, payload };
}
