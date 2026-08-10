import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClasses = (linkPath) => {
    const base = "font-label-caps text-[15px] uppercase tracking-[0.1em] transition-colors duration-300";
    if (path === linkPath) {
      return `${base} text-primary font-bold border-b-2 border-primary pb-1`;
    }
    return `${base} text-on-surface hover:text-primary`;
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md bg-surface/95 backdrop-blur-md' : 'bg-surface/80 backdrop-blur-md'}`}>
      <nav className="flex justify-between items-center px-6 md:px-margin-desktop py-4 w-full max-w-container-max mx-auto">
        <Link to="/" className="flex items-center gap-4">
          <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center border border-outline-variant/30 overflow-hidden">
            <img src="/foto/logo.png" alt="Logo" className="w-full h-full object-cover" onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }} />
            <span className="material-symbols-outlined text-primary text-2xl hidden">local_pizza</span>
          </div>
          <span className="text-headline-md font-headline-md text-primary tracking-tight">Bella Roma</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-gutter">
          <Link to="/" className={getLinkClasses("/")}>Home</Link>
          <Link to="/poveste" className={getLinkClasses("/poveste")}>Povestea Noastră</Link>
          <Link to="/contact" className={getLinkClasses("/contact")}>Contact</Link>
        </div>
        
        {/* Action / Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:block bg-primary text-on-primary px-8 py-3 rounded-full font-label-caps text-[15px] hover:opacity-80 transition-opacity uppercase tracking-widest">
            Comandă
          </Link>
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-container-high border-t border-outline-variant/30 shadow-xl flex flex-col py-4 px-6 gap-6">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className={getLinkClasses("/")}>Home</Link>
          <Link to="/poveste" onClick={() => setMobileMenuOpen(false)} className={getLinkClasses("/poveste")}>Povestea Noastră</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={getLinkClasses("/contact")}>Contact</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-caps text-[15px] text-center uppercase tracking-widest">
            Comandă Acum
          </Link>
        </div>
      )}
    </header>
  );
}
