import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import HomePage from './layout/homePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './layout/about/About';

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
      <BrowserRouter>
        <Header searchKey={textSearch} updateSearchKey={updateSearchKey} updateText={updateText} />
        <Routes>
          <Route path='/' element={<HomePage searchKey={searchKey} />} />
          <Route path='/:maTheLoai' element={<HomePage searchKey={searchKey} />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
