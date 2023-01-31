import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ReservePage from './pages/ReservePage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
//import Footer from './components/Footer';
//import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<div className="row Header" id="header">
					<Navbar />
				</div>
				<div className="content">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/reserve" element={<ReservePage />} />
						<Route path="/menu" element={<MenuPage />} />
						<Route path="/contact" element={<ContactPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</ApolloProvider>
	);
};

export default App;
