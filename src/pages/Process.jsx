import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Process() {
  return (
    <div className="process-page w-full">
      {/* Hero Section: The Soul of Pizza */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/videos/HERO-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-0 max-w-4xl">
          <span className="font-label-caps text-label-caps text-primary mb-6 block tracking-[0.3em] uppercase">Tradiție și Măiestrie</span>
          <h1 className="font-display-lg text-4xl md:text-display-lg text-on-surface mb-8">Arta Pizza Napoletane</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
            De la fermentarea lentă a aluatului până la căldura intensă a cuptorului cu lemne, fiecare pas este un omagiu adus meșteșugului autentic italian.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button 
              onClick={() => document.getElementById('proces').scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps hover:scale-105 transition-transform uppercase tracking-widest"
            >
              Descoperă Procesul
            </button>
            <Link 
              to="/contact" 
              className="border border-primary text-primary px-8 py-4 font-label-caps text-label-caps hover:bg-primary/10 transition-colors text-center uppercase tracking-widest"
            >
              Rezervă O Masă
            </Link>
          </div>
        </div>
      </section>

      {/* The Process: Bento-inspired Step-by-Step */}
      <section id="proces" className="py-16 md:py-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-primary mb-4">Procesul Nostru Artizanal</h2>
          <div className="h-1 w-24 bg-primary mx-auto opacity-50"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Step 1: Dough */}
          <div className="col-span-1 md:col-span-12 lg:col-span-7 bg-surface-container p-8 md:p-12 soft-gold-glow flex flex-col justify-center rounded-xl md:rounded-none">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl md:text-display-lg font-display-lg text-primary/20">01</span>
              <h3 className="font-headline-md text-2xl md:text-headline-md text-on-surface">Pregătirea Aluatului</h3>
            </div>
            <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-8 leading-relaxed">
              Secretul nostru stă în răbdare. Folosim făină italiană tip 00, apă pură și maia naturală. Aluatul se odihnește minim 48 de ore la temperatură controlată pentru a dezvolta o textură aerată, ușoară și extrem de digestibilă.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col border-l-2 border-primary/30 pl-4">
                <span className="font-label-caps text-label-caps text-primary mb-1">DURATĂ</span>
                <span className="font-headline-md text-[20px] text-on-surface">48-72 Ore</span>
              </div>
              <div className="flex flex-col border-l-2 border-primary/30 pl-4">
                <span className="font-label-caps text-label-caps text-primary mb-1">HIDRATARE</span>
                <span className="font-headline-md text-[20px] text-on-surface">65% - 70%</span>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-12 lg:col-span-5 h-[300px] md:h-[500px] rounded-xl md:rounded-none overflow-hidden">
            <video 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
              autoPlay muted loop playsInline
            >
              <source src="/videos/pasul-1-creere-pizza.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Step 2: Ingredients */}
          <div className="col-span-1 md:col-span-12 lg:col-span-5 h-[300px] md:h-[600px] order-last lg:order-none rounded-xl md:rounded-none overflow-hidden">
            <video 
              className="w-full h-full object-cover" 
              autoPlay muted loop playsInline
            >
              <source src="/videos/pasul-3-creere-pizza.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="col-span-1 md:col-span-12 lg:col-span-7 bg-surface-container-high p-8 md:p-12 flex flex-col justify-center rounded-xl md:rounded-none">
            <div className="flex items-center gap-4 mb-6 md:mb-10">
              <span className="text-5xl md:text-display-lg font-display-lg text-primary/20">02</span>
              <h3 className="font-headline-md text-2xl md:text-headline-md text-on-surface">Ingrediente Premium</h3>
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4 md:gap-6">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">eco</span>
                <div>
                  <h4 className="font-headline-md text-[18px] md:text-[20px] text-on-surface mb-2">Roșii San Marzano D.O.P.</h4>
                  <p className="text-on-surface-variant text-sm md:text-base">Cultivate în solul vulcanic de la poalele Vezuviului pentru o dulceață inconfundabilă.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-6">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">water_drop</span>
                <div>
                  <h4 className="font-headline-md text-[18px] md:text-[20px] text-on-surface mb-2">Mozzarella di Bufala</h4>
                  <p className="text-on-surface-variant text-sm md:text-base">Livrată proaspătă săptămânal direct din regiunea Campania pentru acea cremositate perfectă.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-6">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">workspace_premium</span>
                <div>
                  <h4 className="font-headline-md text-[18px] md:text-[20px] text-on-surface mb-2">Ulei de Măsline Extra Virgin</h4>
                  <p className="text-on-surface-variant text-sm md:text-base">Presat la rece, oferind note fructate care completează perfect gustul final.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Baking */}
          <div className="col-span-1 md:col-span-12 relative h-[400px] md:h-[450px] overflow-hidden group rounded-xl md:rounded-none">
            <video 
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[2000ms]" 
              autoPlay muted loop playsInline
            >
              <source src="/videos/pasul-4-creere-pizza-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent flex items-center p-8 md:p-12">
              <div className="max-w-lg relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl md:text-headline-lg font-display-lg text-primary/40">03</span>
                  <h3 className="font-headline-md text-2xl md:text-headline-md text-on-surface">Coacerea la 450°C</h3>
                </div>
                <p className="text-on-surface mb-6 text-sm md:text-base">În cuptorul nostru tradițional cu lemne, pizza se coace în doar 60-90 de secunde. Această temperatură extremă creează faimoasa crustă "leopard", păstrând în același timp interiorul moale și hidratat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Menu Tease */}
      <section className="py-16 md:py-section-gap bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface mb-8">Clasicii Noștri</h2>
            <ul className="space-y-6 md:space-y-8">
              <li className="flex flex-col">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-headline-md text-xl md:text-[22px] text-primary">Margherita S.M.</span>
                  <span className="font-body-md text-on-surface">42 RON</span>
                </div>
                <p className="text-on-surface-variant italic text-sm md:text-base">Roșii San Marzano, Mozzarella fior di latte, busuioc proaspăt, parmezan, ulei E.V.O.</p>
              </li>
              <li className="flex flex-col">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-headline-md text-xl md:text-[22px] text-primary">Diavola Calabrese</span>
                  <span className="font-body-md text-on-surface">48 RON</span>
                </div>
                <p className="text-on-surface-variant italic text-sm md:text-base">Salam picant Ventricina, Nduja di Spilinga, ceapă roșie caramelizată, fulgi de chili.</p>
              </li>
              <li className="flex flex-col">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-headline-md text-xl md:text-[22px] text-primary">Quattro Formaggi</span>
                  <span className="font-body-md text-on-surface">52 RON</span>
                </div>
                <p className="text-on-surface-variant italic text-sm md:text-base">Gorgonzola piccante, Taleggio, Pecorino Romano, Fior di latte, nucă prăjită.</p>
              </li>
            </ul>
            <div className="mt-8 md:mt-12">
              <Link to="/contact" className="text-primary font-label-caps text-label-caps border-b border-primary pb-2 hover:opacity-70 transition-opacity uppercase tracking-widest">
                Vezi Meniul Complet
              </Link>
            </div>
          </div>
          <div className="relative bg-surface p-8 md:p-12 border border-primary/20 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-primary text-5xl md:text-6xl mb-4 md:mb-6">restaurant</span>
            <h3 className="font-headline-lg text-2xl md:text-headline-lg text-on-surface mb-4">Gustă Tradiția la Tine Acasă</h3>
            <p className="text-on-surface-variant mb-8 md:mb-10 text-sm md:text-base">Livrăm în tot orașul folosind ambalaje speciale care mențin temperatura și textura crustei artizanale.</p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link to="/contact" className="bg-primary text-on-primary px-8 md:px-10 py-4 md:py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors w-full sm:w-auto text-center">
                Comandă Online
              </Link>
              <Link to="/contact" className="border border-on-surface text-on-surface px-8 md:px-10 py-4 md:py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-colors w-full sm:w-auto text-center">
                Rezervă Masă
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
