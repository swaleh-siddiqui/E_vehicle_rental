import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import Home from './Home';
import About from './About';
import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';
import Rentals from './Rentals';
import Footer from './common/Footer';
import CompareAll from './CompareAll';
import PreBook from './PreBook';

import './App.css';

const App = () => (
  
  <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/compare" element={<CompareAll />} />
        <Route path="/pre-book" element={<PreBook />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>
      </main>
      <footer style={{padding : 0}} id='Footer'>
        <Footer />
      </footer>
    
  </Router>
  
);

export default App;
