import './elokuvasivun_pohja.css';
import kuva from './images/movie3.jpg';

function Elokuva() {
    return (
        <>
        <Elokuvasivu />
        </>
    )
}

const Elokuvasivu = () => {
    return (
        <>
        <div className='runko_main'>
            <div className='runko_row'>
            <Kuva />
            <div className='runko_column'>
            <div className='runko_row'>
                //otsikkotiedot
                //tähdet
            </div>
            //muut tiedot
            </div>
            </div>
        </div>
        </>
    );
};

const Kuva = () => {
    return (
        <div className='paakuva'>
        <img src={kuva} alt=""/>
        </div>
    );
}

const Tiedot = () => {
    return (
        <>
        </>
    );
}

export default Elokuva;
//export default Elokuvasivu;