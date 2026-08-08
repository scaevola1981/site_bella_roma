import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bella_roma_cookie_consent');
    if (!consent) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('bella_roma_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            right: '20px',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div className="glass-panel" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            padding: '20px 30px',
            maxWidth: '800px',
            width: '100%',
            borderRadius: '16px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text)', lineHeight: '1.5' }}>
              Folosim cookie-uri pentru a vă asigura cea mai bună experiență pe site-ul nostru. Continuând să navigați, sunteți de acord cu utilizarea acestora.
            </p>
            <button 
              onClick={acceptCookies}
              className="btn btn-primary"
              style={{ whiteSpace: 'nowrap', padding: '10px 24px', fontSize: '0.9rem' }}
            >
              Am înțeles
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
