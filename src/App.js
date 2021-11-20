import Navbar from './components/Layout/Navbar';
import Cards from './components/Product/Cards';
import Footer from './components/Layout/Footer';
import About from './components/About';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import './App.css';
// Imports the BrowserRouter, Route and Link components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

library.add(fab, faShoppingCart, faSearch);

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Cards />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
