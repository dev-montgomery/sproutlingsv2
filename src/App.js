import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-container">
          <header>
            <nav>
              <ul className="nav-icons">
                <li className="tooltip">
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <i className="fa fa-brands fa-instagram"></i>
                  </a>
                  <span className="tooltiptext">Instagram</span>
                </li>
                <li className="tooltip">
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <i className="fa fa-brands fa-facebook"></i>
                  </a>
                  <span className="tooltiptext">Facebook</span>
                </li>
                <li className="tooltip">
                  <Link to="/">
                    <i className="fa fas fa-seedling"></i>
                  </Link>
                  <span className="tooltiptext">Home</span>
                </li>
                <li className="tooltip">
                  <Link to="/about">
                    <i className="fa fa-solid fa-book-open"></i>
                  </Link>
                  <span className="tooltiptext">About Us</span>  
                </li>
                <li className="tooltip">
                  <Link to="/cart">
                    <i className="fa fa-solid fa-cart-shopping"></i>
                  </Link>
                  <span className="tooltiptext">Place Order</span>
                </li>
              </ul>
            </nav>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          <footer>
            <p>&copy; 2024 Sproutlings Microgreens LLC</p>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;