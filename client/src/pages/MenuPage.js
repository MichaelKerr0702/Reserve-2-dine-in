import React, { useState } from 'react';
import Menu from '../components/Menu';
import Categories from '../components/Categories';
import items from '../utils/data';
import logo from '../assets/logo1.png';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

const MenuPage = () => {
	const [menuItems, setMenuItems] = useState(items);
	const [activeCategory, setActiveCategory] = useState('');
	const [categories] = useState(allCategories);

	const filterItems = (category) => {
		setActiveCategory(category);
		if (category === 'all') {
			setMenuItems(items);
			return;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItems(newItems);
	};
	return (
		<section className="menu section">
			<div className="title">
			<img src={logo} alt="logo" className="logo"></img>
				<h2>Menu List</h2>
				<div className="underline"></div>
			</div>
			<Categories
				categories={categories}
				activeCategory={activeCategory}
				filterItems={filterItems}
			/>
			<Menu items={menuItems} />
		</section>
	);
};

export default MenuPage;
