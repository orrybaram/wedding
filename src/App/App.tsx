import React from 'react';
import Header from './components/Header';
import './app.styles.css';
import Home from '../Screens/Home';
import ZolaRegistry from '../components/ZolaRegistry';

const App = () => (
  <>
    <Header />
    <Home />
    <ZolaRegistry
      url="www.zola.com/registry/hannaandorry"
      registryKey="hannaandorry"
    />
  </>
);

export default App;
