import Navbar from './components/Layout/Navigation';
import Cards from './components/Product/Cards';
import Footer from './components/Layout/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
