import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo1.png';


function Navbar(props) {
	return (
		<><div className="row navigation" id="navigation">
			<NavLink to="/">Home </NavLink>
			<NavLink to="/reserve">Reserve </NavLink>
			<NavLink to="/menu">Menu </NavLink>
			<NavLink to="/contact">Review </NavLink>
		</div><img src={logo} alt="logo" className="logo" /></>

	);
}

export default Navbar;
