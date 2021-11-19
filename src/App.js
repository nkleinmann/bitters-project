// import Blurb from '../src/components/blurb';
import Navbar from './components/Layout/navigation';
// import bitters from '../src/_assets/bitters.jpg';
import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <header className="App-header">
        <img src={bitters} className='App-logo' alt="drink with bitters" />
        {/* https://unsplash.com/photos/YeH5EIRFCIs
        <p>
          Bitter Boys
        </p>
        <a
          className="App-link"
          href="https://shaquanda-will-feed-you.myshopify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          App link
        </a>
      <Blurb />
      </header> */}
      <Cards />
    </div>
  );
}

export default App;
