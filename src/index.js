import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { Suspense } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';

import AppConfigs from './config/app_configs';
import AppLayout from './layouts/App/AppLayout';
import AuthLayout from './layouts/Auth/AuthLayout';
import { createRoot } from 'react-dom/client';

import { createBrowserHistory } from 'history';

// import "bootswatch/dist/darkly/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.css";

import IndexScreen from './components/Index/IndexScreen';
import PIGSScreen from './components/Index/PIGSScreen';
import RTSScreen from './components/Index/RTSScreen';

const hist = createBrowserHistory();
const cache = new InMemoryCache({ addTypename: true });

const client = new ApolloClient({
	uri: `${AppConfigs.server_url}/graphql`,
	cache,
	credentials: 'include',
});

const RcApp = () => {
	return (
		<Router history={hist}>
			<Switch>
				<Route path="/" exact>
					<IndexScreen history={hist} />
				</Route>
				<Route path="/rts" exact>
					<RTSScreen history={hist} />
				</Route>
				<Route path="/pigs" exact>
					<PIGSScreen history={hist} />
				</Route>

				<Redirect from="/auth" exact to="/auth/login" />
				<Route path="/auth" render={props => <AuthLayout {...props} />} />
				<Route path="/home" render={props => <AppLayout {...props} />} />
			</Switch>
		</Router>
	);
};

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
	<ApolloProvider client={client}>
		<Suspense fallback={<div>Loading...</div>}>
			<RcApp />
		</Suspense>
	</ApolloProvider>
	
);
