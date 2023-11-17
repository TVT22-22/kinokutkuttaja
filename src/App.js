import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Moviepage from "./Elokuvasivu";
import Etusivu from "./etusivu";
import Footer from "./footer";
import Header from "./header";

function App() {
    return (
        <BrowserRouter>
        <div className='start'>
        <Header />

        <Routes>
            <Route path="/" element={<Etusivu/>} />
            <Route path="/moviepage" element={<Moviepage/>} />
        </Routes>

        <Footer />
        </div>
        </BrowserRouter>
    );
}

export default App;
