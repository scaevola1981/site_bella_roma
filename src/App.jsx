import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Process from './pages/Process';
import Contact from './pages/Contact';
import MozzarellaCursor from './components/MozzarellaCursor';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <Router>
      <div className="app-container">
        <MozzarellaCursor />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/poveste" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
