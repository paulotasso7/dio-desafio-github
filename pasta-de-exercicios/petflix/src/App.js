import React, {  useState } from 'react';


import './App.css';

import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Grid from './components/Grid/Grid';
import Footer from './components/Footer/Footer';




  // const [petState, setPetState ] = useState(petImg: res[0].url)


function App() {
  return (
    <div >
      <NavBar/>
      <Banner/>
      <Grid />
      <Footer/>
    </div>
  );
}

export default App;
