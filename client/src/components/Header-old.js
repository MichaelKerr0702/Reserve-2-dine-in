import React, { Component } from 'react';
import { Route, Redirect, HashRouter } from 'react-router-dom';
import Navigation from '../components/Navbar';
import Reserve from '../pages/ReservePage';
import Contact from '../components/Contact';
//import Portfolio from '../components/Portfolio';
import Menu from '../components/Menu';

class Header extends Component {
	render() {
		return (
			<HashRouter>
				<div className="row Header" id="header">
					<Navigation />
				</div>

				<div className="content">
					<Route exact path="/" render={() => <Redirect to="/portfolio" />} />
					<Route path="/reserve" component={Reserve} />
					<Route path="/menu" component={Menu} />
					<Route path="/contact" component={Contact} />
				</div>
			</HashRouter>
		);
	}
}

export default Header;
