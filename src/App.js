import Navbar from './components/Layout/Navbar';
import Cards from './components/Product/Cards';
import Footer from './components/Layout/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(fab, faShoppingCart, faSearch);

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
