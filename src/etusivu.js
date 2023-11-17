import React from 'react';
import './App.css';
import Ajankohtaista from './ajankohtaista';
import Footer from './footer';
import Header from './header';
import Kollaasi from './kollaasi';
import Elokuvat_etusivulla from './oletko-jo-tutustunut-naihin';

function Etusivu() {
  return (
    <div className='start'>
    <Header />

    <div className='section'>
      <h1>Ajankohtaista juuri nyt</h1>
      <Ajankohtaista />
    </div>

    <div className='section'>
      <h1>Oletko jo tutustunut näihin?</h1>
      <p>filtterit tähän? ulkonäöllisesti, toimintaehdotukset koodissa</p>
      <Elokuvat_etusivulla />
    </div>
    <Kollaasi />
    <Footer />
    </div>
  );
}

export default Etusivu;
