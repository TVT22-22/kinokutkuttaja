import './App.css';
import './monikkotyylit.css';
import React, { useState } from 'react';
import axios from 'axios';

const KirjRek = () => {
    return (
        <>
            <div className='section'>
                <h1>Kirjaudu sisään</h1>
                <p className="esittelytxt">Mikäli sinulla on jo käyttäjätunnus ja salasana, voit kirjautua sisään.</p>
                <Kirjaudu />
            </div>

            <div className='section'>
                <h1>Rekisteröidy käyttäjäksi</h1>
                <p className="esittelytxt">Voit luoda uuden käyttäjätunnuksen antamalla seuraavat tiedot.</p>
                <Rekisteroidy />
            </div>
        </>
    );
};


const Kirjaudu = () => {
    const [usernick, setUsernick] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { usernick, password });

            if (response.data.success) {
                localStorage.setItem('token', response.data.token); // Tallentaa tokenin local storageen
                console.log('Kirjautuminen onnistui');
                console.log('Token:', response.data.token);

            } else {
                console.error('Kirjautuminen epäonnistui:', response.data.message);
            }
            
        } catch (error) {   // Error viestit
            console.error('Error during login:', error);
            if (error.response) {
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Other error occurred:', error.message);
            }
        }
    };

    return (
        <>
            <div className='luettelo kirjoitusalueet'>
                <div className='luettelo_osa leveys20'><h3>Käyttäjänimi:</h3></div>
                <div className='luettelo_osa leveys80'>
                    <input className='tekstialue tekstialue_leveys90' placeholder='käyttäjätunnus' type="text" value={usernick} onChange={(e) => setUsernick(e.target.value)}></input>
                </div>
            </div>
            <div className='luettelo kirjoitusalueet'>
                <div className='luettelo_osa leveys20'><h3>Salasana:</h3></div>
                <div className='luettelo_osa leveys80'>
                    <input className='tekstialue tekstialue_leveys90' placeholder='****' type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
            </div>
            <button className='yleinen_btn levea sininen' onClick={handleLogin}>Kirjaudu sisään</button>
        </>
    );
}

const Rekisteroidy = () => {
    const [usernick, setUsernick] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/register', { usernick, password, email });

            if (response.data.success) {
                console.log('Käyttäjätunnuksen luominen onnistui');
            } else {
                console.error('Käyttäjätunnuksen luominen epäonnistui:', response.data.message);
            }
        } catch (error) {
            console.error('Error during registration:', error.message);
        }
    };

    return (
        <>
            <div className='luettelo kirjoitusalueet'>
                <div className='luettelo_osa leveys20'><h3>Nimimerkki:</h3></div>
                <div className='luettelo_osa leveys80'>
                    <input className='tekstialue tekstialue_leveys90' type="text" value={usernick} onChange={(e) => setUsernick(e.target.value)}></input>
                </div>
            </div>
            <div className='luettelo kirjoitusalueet'>
                <div className='luettelo_osa leveys20'><h3>Sähköposti:</h3></div>
                <div className='luettelo_osa leveys80'>
                    <input className='tekstialue tekstialue_leveys90' type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
            </div>
            <div className='luettelo kirjoitusalueet'>
                <div className='luettelo_osa leveys20'><h3>Salasana:</h3></div>
                <div className='luettelo_osa leveys80'>
                    <input className='tekstialue tekstialue_leveys90' type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
            </div>
            <button className='yleinen_btn levea sininen' onClick={handleRegister}>Luo käyttäjätunnus</button>
        </>
    );
}

export default KirjRek;