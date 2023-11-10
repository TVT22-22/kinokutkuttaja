import './App.css';
import Ajankohtaista from './ajankohtaista';
import Footer from './footer';
import Header from './header';

function App() {
  return (
    <div className='start'>
    <Header />
    <div className='sisalto'>
      <h1>Ajankohtaista juuri nyt</h1>
      <Ajankohtaista />
    </div>
    <Footer />
    </div>
  );
}

export default App;
