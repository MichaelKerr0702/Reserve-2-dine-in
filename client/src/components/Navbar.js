import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar(props) {
	return (
		<><div className="row navigation" id="navigation">
			<NavLink to="/">Home </NavLink>
			<NavLink to="/reserve">Reserve </NavLink>
			<NavLink to="/menu">Menu </NavLink>
			<NavLink to="/review">Review </NavLink>
		</div></>

	);
}

export default Navbar;
