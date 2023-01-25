import React from 'react';
//import Navbar from './components/Navbar';
import Header from './components/Header';
//import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
