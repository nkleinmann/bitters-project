import Navbar from './components/Layout/Navbar';
import Cards from './components/Product/Cards';
import Footer from './components/Layout/Footer';
import About from './components/About';
import './App.css';
// Imports the BrowserRouter, Route and Link components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
          <Routes>
            <Route path="/" element={<Cards />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
