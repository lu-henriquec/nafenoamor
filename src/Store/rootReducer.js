import { combineReducers } from 'redux';

import formDataReducer from './FormData/reducer';
import cardReducer from './Card/reducer';

export default combineReducers({
	formDataReducer,
	cardReducer
});