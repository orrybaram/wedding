import React from 'react';
import './Home.style.css';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Details from './components/Details';
import AdditionalInfo from './components/AdditionalInfo';
import ZolaRegistry from '../../components/ZolaRegistry';
import Story from './components/Story';

const Home = () => {
  return (
    <main className="Home">
      <Hero />
      <Banner />
      <Details />
      <Story />
      <AdditionalInfo />
      <ZolaRegistry
        url="www.zola.com/registry/hannaandorry"
        registryKey="hannaandorry"
      />
    </main>
  );
};

export default Home;
