import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './Store';

import Routes from './Routes';
import GlobalStyles from './Styles/global';

function App() {
	return(
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyles />
				<Routes />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
