import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import HomePage from './layout/homePage/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
