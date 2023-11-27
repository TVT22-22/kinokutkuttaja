import './App.css';
import './kollaasi.css';
import './monikkotyylit.css';

/* To do:
- Muunna avatar satunnaiseksi -> arpoo yhdelle id:lle tietyn? Pitäisikö olla merkitty tietokantaan? Vai vaihtuuko joka kerta erilaiseen?
- Tiedot tietokannoista, yhdistä oikeisiin kohtiin
- Aktivoi buttonit*/

const Kayttaja = () => {
    return (
        <>
            <div className='section'>
                <h1>Tervetuloa *käyttäjänimi*</h1>
                <Tili />
                <TiliYhteisot />
                <TiliArvostelut />
                <TiliSuosikit />
                <TiliButtonit />
            </div>
        </>
    );
};

const Tili = () => {
    return (
        <>
        <div className='luettelo kayttaja'>
            <div className='luettelo_osa leveys30'>
            <img src="https://api.dicebear.com/7.x/thumbs/svg?seed=Tinkerbell" className="avatar" alt="avatar" />
            </div>
            <div className='luettelo_osa leveys70'>
                <h3>Käyttäjänimi: </h3>
                <h3>Sähköposti: </h3>
            </div>
        </div>
        </>
    )
}

const TiliYhteisot = () => {
    return (
    <div className='kirjoitusalueet'>
    <h5>Kuulut seuraaviin yhteisöihin:</h5>
    <ul>
        <li>yhteisö1</li>
        <li>yhteisö 2</li>
    </ul>
    </div>
    )
}

const TiliArvostelut = () => {
    return (
        <div className='kirjoitusalueet'>
        <h5>Kirjoittamasi arviot:</h5>
        <ul>
            <li>Arvio, elokuva - pvm</li>
            <li>Arvio, elokuva - pvm</li>
        </ul>
        </div>
    )
}

const TiliSuosikit = () => {
    return (
        <div className='kirjoitusalueet'>
        <h5>Omat suosikkielokuvasi:</h5>
        <ul>
            <li>elokuvan nimi</li>
            <li>elokuvan nimi</li>
            <li>elokuvan nimi</li>
        </ul>
        </div>
    )
}

const TiliButtonit = () => {
    return (
    <>
    <button className='yleinen_btn levea punainen'>Poista käyttäjätunnus</button>
    </>
    )
}

export default Kayttaja;