// Imports the BrowserRouter, Route and Link components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';
import Cards from './components/Product/Cards';
import Footer from './components/Layout/Footer';
import About from './views/aboutView';
import Filter from './views/filterView';
import ZoomCard from './components/Product/ZoomCard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(fab, faShoppingCart, faSearch);

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Cards />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/filter' element={<Filter />} />
          <Route exact path='/card' element={<ZoomCard />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
