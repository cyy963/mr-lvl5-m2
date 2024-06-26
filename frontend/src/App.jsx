
import './App.css';
import CarValueForm from './components/CarValueForm';
import ClaimForm from './components/ClaimForm';
import TCnav from './assets/TCnav.png';
import TCbanner from './assets/TCbanner.png';
import TCfooter from './assets/TCfooter.png';
import QuoteForm from './components/QuoteForm';

const App = () => {

  return (
    <div className='body'>
      <img className='nav' src={TCnav} alt="Navigation" />
      <img className='banner' src={TCbanner} alt="Banner" />
      
      <div className='pageContent'>
        <h1>Use our online calculators to get a quote!</h1>
        <div className='calculators'>
          <CarValueForm />
          <ClaimForm />
          <QuoteForm />
        </div>
      </div>
      <img className='footer' src={TCfooter} alt="Footer" />
    </div>
  );
};

export default App;
