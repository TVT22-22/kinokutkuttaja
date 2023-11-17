import React from 'react';
import './App.css';
import Elokuvasivu from "./elokuvasivun_pohja";
import Footer from './footer';
import Header from './header';

const Moviepage = () => {
    return (
        <div className='start'>
            <Header />
            <div className='section'>
            <Elokuvasivu />
            </div> 
            <Footer />
        </div>
    )
};

export default Moviepage;