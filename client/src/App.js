import React, { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
//import items from "./data";
import logo from "./logo1.png";
import Header from "./components/Header"
//import Footer from './components/Footer';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


//const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
 // const [menuItems, setMenuItems] = useState(items);
 // const [activeCategory, setActiveCategory] = useState("");
 // const [categories] = useState(allCategories);

  //const filterItems = (category) => {
  //  setActiveCategory(category);
  //  if (category === "all") {
  //    setMenuItems(items);
   //   return;
 //   }
 //  const newItems = items.filter((item) => item.category === category);
  //  setMenuItems(newItems);
 // };
  return (
    <main>
      <div>
        <Header />
      </div>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
         // categories={categories}
        //  activeCategory={activeCategory}
        //  filterItems={filterItems}
        />
       <Menu /> 
      </section>
    </main>
  );
};

export default App;
