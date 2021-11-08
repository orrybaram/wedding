import React from 'react';
import Header from './components/Header';
import './app.styles.css';
import Home from '../Screens/Home';
import { Route, Routes } from 'react-router-dom';
import Thanks from '../Screens/Thanks';
const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="thanks" element={<Thanks />} />
    </Routes>
  </>
);

export default App;
