import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-16 md:py-section-gap max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <span className="text-headline-md font-headline-md text-primary block mb-6">Bella Roma</span>
          <p className="text-on-surface-variant font-body-md mb-8">
            Autenticitate napoletană, pasiune italiană și ingrediente de cea mai înaltă calitate, direct la tine acasă.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:text-primary hover:border-primary transition-all" href="#">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:text-primary hover:border-primary transition-all" href="#">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>

        {/* Contact & Location */}
        <div>
          <h4 className="font-headline-md text-xl mb-8">Contact &amp; Locație</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <span>Strada Principala 6, Drăgioiu, Râmnicu Vâlcea, 247443</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span>contact@bellaromapub.ro</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <span>Luni - Duminică: 12:00 - 23:00</span>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-headline-md text-xl mb-8">Link-uri Utile</h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" to="/contact">Comandă Online</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" to="/poveste">Povestea Noastră</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" to="/">Sustenabilitate</Link></li>
            <li><Link className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" to="/">Cariere</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="font-headline-md text-xl mb-8">Politici</h4>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Privacy Policy</a></li>
            <li><a className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Terms of Service</a></li>
            <li><a className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Termeni și Condiții</a></li>
            <li><a className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all inline-block" href="#">Politica de Confidențialitate</a></li>
          </ul>
        </div>
      </div>
      
      <div className="px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant/10 max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center text-on-surface-variant text-sm gap-4">
        <p>© 2026 Bella Roma Artisanal Pizza. All rights reserved.</p>
        <p>Made with passion for Italian cuisine.</p>
      </div>
    </footer>
  );
}
