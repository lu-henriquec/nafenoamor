import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute(params) {
	const { component: Component, ...props } = params;
	const { formData } = useSelector(state => state.formDataReducer);

	if(!formData.na_fe_no_amor) {
		return <Redirect to='/' />;
	}

	return (
		<Route
			{...props}
			render={props => <Component {...props} /> }
		/>
	);
}
