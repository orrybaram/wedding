import React from 'react';
import './Home.style.css';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Details from './components/Details';
import AdditionalInfo from './components/AdditionalInfo';

const Home = () => {
  return (
    <main className="Home">
      <Hero />
      <Banner />
      <Details />
      <AdditionalInfo />
    </main>
  );
};

export default Home;
