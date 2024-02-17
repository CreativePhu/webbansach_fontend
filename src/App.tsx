import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import HomePage from './layout/homePage/HomePage';

function App() {
  const [searchKey, setSearchKey] = useState<string>("")
  const [textSearch, setTextSearch] = useState<string>("")

  const updateText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearch(event.target.value)
  }

  const updateSearchKey = () => {
    setSearchKey(textSearch)
  }

  return (
    <div className="App">
      <Header searchKey={textSearch} updateSearchKey={updateSearchKey} updateText={updateText} />
      <HomePage searchKey={searchKey} />
      <Footer />
    </div>
  );
}

export default App;
