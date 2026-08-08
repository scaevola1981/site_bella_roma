import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Home() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${offset * 0.5}px) scale(1.05)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div ref={parallaxRef} className="w-full h-full absolute inset-0 scale-105 origin-center will-change-transform">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/HERO-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        
        <div className="relative z-20 text-center max-w-4xl px-margin-mobile md:px-0">
          <span className="inline-block text-primary font-label-caps text-label-caps mb-6 tracking-[0.4em] uppercase">Autenticitate Napoletană</span>
          <h1 className="font-display-lg text-4xl md:text-display-lg mb-8 leading-tight drop-shadow-[0_0_20px_rgba(242,202,80,0.3)]">Bella Roma Artisanal Pizza</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Descoperă arta dospirii lente de 48 de ore și gustul inconfundabil al cuptorului cu lemne. Măiestrie italiană în fiecare felie, livrată direct la ușa ta.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="bg-primary text-on-primary px-10 py-5 rounded-full font-label-caps text-label-caps hover:-translate-y-1 transition-transform duration-300 shadow-lg shadow-primary/20 uppercase tracking-widest text-center w-full md:w-auto">
              Vezi Meniul
            </Link>
            <Link to="/poveste" className="border border-primary text-primary px-10 py-5 rounded-full font-label-caps text-label-caps hover:bg-primary/10 transition-all duration-300 uppercase tracking-widest text-center w-full md:w-auto">
              Povestea Noastră
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <span className="material-symbols-outlined text-primary text-3xl">expand_more</span>
        </div>
      </section>

      {/* Secretul Calitatii (Bento Grid Style) */}
      <section className="py-24 md:py-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-4">Secretul Calității Noastre</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter md:h-[800px]">
          {/* Item 1: Ingredients */}
          <div className="col-span-1 md:col-span-7 bg-surface-container rounded-xl overflow-hidden group relative h-[300px] md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent z-10"></div>
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Ingrediente Premium" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFZqAagpH3H4vaNhHfjOWaTqR2MOBSo68Djvaukm2gIiHgGtnh7suWRFJttj9E4sLLCEesuz4o6UPqXsVNYKaXM8lDFwq4ncWluLp08NjVRqWGmTyUS-9-cLy7UbwvMZVs5lhrIFiBrc1lS91o7L54aB_THlzi1QByFPkec69GqI5s_0tBRfmeXR-fMdwygYZipG5ZLjntnon8gcJSK1VnVyRDMZIlJUGiTb1oaYzXL3K7Oj61v90"
            />
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-20 max-w-md pr-6">
              <h3 className="font-headline-md text-2xl md:text-headline-md text-primary mb-2 md:mb-4">Ingrediente Premium</h3>
              <p className="text-on-surface-variant font-body-md text-sm md:text-base">Folosim exclusiv Roșii San Marzano D.O.P. și Mozzarella di Bufala Campana pentru un gust cu adevărat autentic.</p>
            </div>
          </div>
          
          {/* Item 2: Dough */}
          <div className="col-span-1 md:col-span-5 bg-surface-container-high rounded-xl p-8 md:p-12 flex flex-col justify-center border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-6 md:mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
            <h3 className="font-headline-md text-2xl md:text-headline-md mb-4 md:mb-6">Dospire Lentă 48h</h3>
            <p className="text-on-surface-variant font-body-md leading-relaxed text-sm md:text-base">
              Aluatul nostru se odihnește timp de două zile la temperatură controlată. Rezultatul? O crustă ușoară, aerată și incredibil de digestibilă, specifică stilului napoletan.
            </p>
          </div>
          
          {/* Item 3: Wood Fire */}
          <div className="col-span-1 md:col-span-5 bg-surface-container rounded-xl overflow-hidden group relative h-[300px] md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Cuptor cu Lemne" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCTDLnWjxCWH7kgos6sbCn6M8C48IUoSviYqCo-au0mWyahAviHW-qc7eMJu9JnrXJP-NOD_cWHfU5jrZQuDwha3ih4gyG1gPZpLoQ3o84Rl0fAZiYpDcHE0pqHP2UnZuZ-HmVLY-i9ioqKxB0L6UaCc7NwvErivXj0SaPv_2UbdEq3OLT3cW8QQ96Ovq7DAc2Q61bgHoLSHO7CbKrkzfi71fJaE4MTqmU0wj_8l0Tcq4BRMuhaIk"
            />
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-20 pr-6">
              <h3 className="font-headline-md text-2xl md:text-headline-md text-primary mb-2">Cuptor cu Lemne</h3>
              <p className="text-on-surface-variant font-body-md text-sm md:text-base">Gătită la 450°C pentru 90 de secunde magice.</p>
            </div>
          </div>
          
          {/* Item 4: Tradition */}
          <div className="col-span-1 md:col-span-7 bg-surface-container-high rounded-xl p-8 md:p-12 flex flex-col justify-end border border-outline-variant/20 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-5">
              <span className="material-symbols-outlined text-[150px] md:text-[200px]">restaurant</span>
            </div>
            <h3 className="font-headline-md text-2xl md:text-headline-md mb-4 md:mb-6 mt-12 md:mt-0 relative z-10">Măiestrie Transmisă</h3>
            <p className="text-on-surface-variant font-body-md max-w-xl text-sm md:text-base relative z-10">
              Respectăm cu sfințenie tehnicile vechi de secole ale "pizzaiolo" napoletani, adaptate pentru gustul modern dar fără a compromite rădăcinile noastre artizanale.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="bg-surface-container-lowest py-16 md:py-section-gap">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 md:mb-16 gap-6">
            <div>
              <span className="text-primary font-label-caps text-label-caps mb-2 md:mb-4 block uppercase tracking-widest">Favoritele Casei</span>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg">Meniul Semnătură</h2>
            </div>
            <Link to="/contact" className="text-primary font-label-caps text-label-caps border-b border-primary pb-1 hover:opacity-70 transition-opacity w-max uppercase tracking-widest">
              VEZI TOT MENIUL
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {/* Menu Item 1 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group cursor-pointer">
              <div className="w-full sm:w-24 h-48 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden border border-outline-variant/30">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Margherita" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLqxfMySAuitdS5T2poxkEgHRLHyDFE60hmwr3OmKMezqy_L1xCWSSkWzr3mqtSS3gd1Gg_Kh5RLqZGRPmplzH6Z8u4BEZ69X9SvGxPI9TwZAr9hm97da2dSEtvbXomlpqS4JIj6B92fczTz_7nT-XCzDl309n8m4FqOawJO0WstJ-FtsCcD8Q24N3aeJTTncGztzOb3mqheySBuZNb6xWPFHksaQ6CL-UFw0DaQSELoxivQh-axE"/>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-baseline mb-2 gap-4 border-b border-outline-variant/30 sm:border-none pb-2 sm:pb-0">
                  <span className="font-headline-md text-xl md:text-xl text-on-surface group-hover:text-primary transition-colors whitespace-nowrap">Margherita D.O.P.</span>
                  <div className="hidden sm:block flex-grow mx-4 border-b border-dashed border-outline-variant opacity-50 relative top-[-6px]"></div>
                  <span className="font-headline-md text-lg md:text-xl text-primary whitespace-nowrap">42 RON</span>
                </div>
                <p className="text-on-surface-variant text-sm italic">Roșii San Marzano, Mozzarella di Bufala, Busuioc proaspăt, Ulei de măsline extravirgin.</p>
              </div>
            </div>
            
            {/* Menu Item 2 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group cursor-pointer">
              <div className="w-full sm:w-24 h-48 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden border border-outline-variant/30">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Diavola" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQiNAtLUOGB327z3NBB19u-8udxa5b3Kqc_3IHL1thnS9qAA1F_r9LXzQe2UgPS3BkkLfvvefkP3rMOxS8_DdpN7aIWZgjXkgZvSqGqmngnBmQnFiPbKiRGpHXJb1ZAsODQ5My_Thpo14q8DYcNzVMTWG0QIyxXwXI4_re-8DGZg7ydHEVZQryABVqcSV6ab7PPX8sr-1acFUXVmBWFnjh9vHFOJUufyVmLD9Pv7H7X_E1BGQY0F4"/>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-baseline mb-2 gap-4 border-b border-outline-variant/30 sm:border-none pb-2 sm:pb-0">
                  <span className="font-headline-md text-xl md:text-xl text-on-surface group-hover:text-primary transition-colors whitespace-nowrap">Diavola Intensa</span>
                  <div className="hidden sm:block flex-grow mx-4 border-b border-dashed border-outline-variant opacity-50 relative top-[-6px]"></div>
                  <span className="font-headline-md text-lg md:text-xl text-primary whitespace-nowrap">48 RON</span>
                </div>
                <p className="text-on-surface-variant text-sm italic">Salam Ventricina picant, Nduja, Mozzarella Fior di Latte, Fulgi de chili.</p>
              </div>
            </div>
            
            {/* Menu Item 3 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group cursor-pointer">
              <div className="w-full sm:w-24 h-48 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden border border-outline-variant/30">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Tartufo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPfQSq3sFMpYfhNv2gmhprUaItRYlK9--Oe0Hqi6pWrMIDnNGZOp6HAvEYeUl-2-pEf0nEREO_9nC17BJ0hry4_KGCFY-MkN-FCM8j6Bgj76ebIom22lb8YqlUPTONSscKj3Nm6EvEL51EgFD3dGCQzJbuT90QN0SpZXHJFhfskWVJNADLngDuKquUaLHtwBnX8zlNLaZgQfQiByuXW6uPEXbSKs0cv8q9Cbf3koSVDley8wK4BWY"/>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-baseline mb-2 gap-4 border-b border-outline-variant/30 sm:border-none pb-2 sm:pb-0">
                  <span className="font-headline-md text-xl md:text-xl text-on-surface group-hover:text-primary transition-colors whitespace-nowrap">Tartufo Bianco</span>
                  <div className="hidden sm:block flex-grow mx-4 border-b border-dashed border-outline-variant opacity-50 relative top-[-6px]"></div>
                  <span className="font-headline-md text-lg md:text-xl text-primary whitespace-nowrap">55 RON</span>
                </div>
                <p className="text-on-surface-variant text-sm italic">Cremă de trufe, Ciuperci de pădure, Mozzarella, Grana Padano.</p>
              </div>
            </div>
            
            {/* Menu Item 4 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group cursor-pointer">
              <div className="w-full sm:w-24 h-48 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden border border-outline-variant/30">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Quattro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOz7vC-rbCcfYHCJDsZN7QLVRXDRS_-y1oPhPzVOmlO7MlckshSgqDkqwziIG1RollQLh0fIRRDOTmOS5TnHUKJhqw8Q7PxMAG5gOQAoxMKE4AO7ECWpIRj3k9VmcMMdHUMPNx1mwVLuwdYzbtCqqTmyr5-lcp_hU8jzunSgr9rf7HIyZJV55RSAWzbHv9e9PSRD2xF37FxtMLO1n-bbi2r3Da4LOY0axwamUOq0wbG5IK7RxiTds"/>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-baseline mb-2 gap-4 border-b border-outline-variant/30 sm:border-none pb-2 sm:pb-0">
                  <span className="font-headline-md text-xl md:text-xl text-on-surface group-hover:text-primary transition-colors whitespace-nowrap">Quattro Formaggi</span>
                  <div className="hidden sm:block flex-grow mx-4 border-b border-dashed border-outline-variant opacity-50 relative top-[-6px]"></div>
                  <span className="font-headline-md text-lg md:text-xl text-primary whitespace-nowrap">52 RON</span>
                </div>
                <p className="text-on-surface-variant text-sm italic">Gorgonzola Dolce, Taleggio, Mozzarella, Pecorino Romano, Nuci prăjite.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Community */}
      <section className="py-16 md:py-section-gap relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 md:px-margin-mobile">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-4 md:mb-6">Alătură-te Familiei Noastre</h2>
          <p className="text-on-surface-variant mb-8 md:mb-10 font-body-lg text-sm md:text-base">
            Înscrie-te pentru a primi oferte exclusive și noutăți despre rețetele noastre artizanale.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-grow bg-surface border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface px-6 py-4 outline-none transition-colors w-full rounded-none" 
              placeholder="Adresa ta de email" 
              type="email"
              required
            />
            <button type="submit" className="bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps hover:bg-primary-container transition-colors uppercase tracking-widest whitespace-nowrap">
              Abonează-te
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
