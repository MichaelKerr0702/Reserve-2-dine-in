import React, { Component } from 'react';
import { Route, Redirect, HashRouter } from 'react-router-dom';
import Navigation from '../components/Navbar';
import Reserve from '../pages/ReservePage';
import Review from '../pages/ReviewPage';
import Menu from '../components/Menu';

class Header extends Component {
	render() {
		return (
			<HashRouter>
				<div className="row Header" id="header">
					<Navigation />
				</div>

				<div className="content">
					<Route exact path="/" render={() => <Redirect to="/home" />} />
					<Route path="/reserve" component={Reserve} />
					<Route path="/menu" component={Menu} />
					<Route path="/review" component={Review} />
				</div>
			</HashRouter>
		);
	}
}

export default Header;
