import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Contact() {
  return (
    <div className="contact-page w-full pt-32">
      {/* Hero Section: Vă așteptăm în inima Italiei */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-16 md:mb-section-gap">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="text-center mb-10 md:mb-16">
          <p className="font-label-caps text-label-caps text-primary mb-4 tracking-[0.2em]">GĂSEȘTE-NE</p>
          <h1 className="font-headline-lg text-4xl md:text-headline-lg mb-6">Vă așteptăm în inima Italiei</h1>
          <div className="w-24 h-px bg-primary mx-auto opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch overflow-hidden">
          {/* Contact Info Column */}
          <motion.div variants={slideInLeft} initial="hidden" animate="visible" className="md:col-span-5 bg-surface-container p-8 md:p-12 border border-outline-variant/30 gold-glow flex flex-col justify-between">
            <div>
              <h3 className="font-headline-md text-2xl md:text-headline-md mb-8 md:mb-12">Informații de Contact</h3>
              <div className="space-y-8 md:space-y-10">
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                  <div>
                    <p className="font-label-caps text-label-caps text-primary mb-2 tracking-widest">ADRESĂ</p>
                    <p className="font-body-lg text-base md:text-body-lg">Strada Principala 6, Drăgioiu,<br/>Râmnicu Vâlcea, 247443</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
                  <div>
                    <p className="font-label-caps text-label-caps text-primary mb-2 tracking-widest">PROGRAM</p>
                    <p className="font-body-lg text-base md:text-body-lg">Luni - Duminică: 12:00 - 23:00</p>
                    <p className="text-on-surface-variant text-xs md:text-sm mt-1">Bucătăria se închide la 22:30</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="material-symbols-outlined text-primary text-3xl">call</span>
                  <div>
                    <p className="font-label-caps text-label-caps text-primary mb-2 tracking-widest">REZERVĂRI ȘI COMENZI</p>
                    <p className="font-body-lg text-base md:text-body-lg text-primary mb-1"><a href="tel:0700000000">0700 000 000</a></p>
                    <p className="font-body-lg text-base md:text-body-lg"><a href="mailto:contact@bellaromapub.ro">contact@bellaromapub.ro</a></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 md:mt-12 pt-8 md:pt-12 border-t border-outline-variant/20">
              <div className="flex gap-6">
                <a className="text-on-surface hover:text-primary transition-colors" href="#">
                  <span className="font-label-caps text-label-caps tracking-widest">INSTAGRAM</span>
                </a>
                <a className="text-on-surface hover:text-primary transition-colors" href="#">
                  <span className="font-label-caps text-label-caps tracking-widest">FACEBOOK</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Column */}
          <motion.div variants={slideInRight} initial="hidden" animate="visible" className="md:col-span-7 relative h-[400px] md:h-auto overflow-hidden border border-outline-variant/30">
            <div className="absolute inset-0 bg-surface-container-highest">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.574673628469!2d24.1678229!3d44.8912953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDUzJzI4LjciTiAyNMKwMTAnMDQuMiJF!5e0!3m2!1sen!2sro!4v1655383561706!5m2!1sen!2sro" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.6) invert(0.9) hue-rotate(180deg)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Harta Bella Roma"
              ></iframe>
              {/* UI Overlay for Map */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-surface-container p-3 md:p-4 border border-outline-variant/30 backdrop-blur-md pointer-events-none hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary">explore</span>
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-label-caps tracking-widest text-primary mb-0.5">OPEN MAPS</p>
                    <p className="text-xs md:text-sm font-bold uppercase">Direcții de Călătorie</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section: Descoperă Bella Roma */}
      <section className="bg-surface-container-low py-16 md:py-section-gap overflow-hidden">
        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="px-6 md:px-margin-desktop max-w-container-max mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <motion.div variants={fadeInUp} className="max-w-xl">
              <p className="font-label-caps text-label-caps text-primary mb-2 md:mb-4 tracking-widest">AMBIANȚĂ</p>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg">Descoperă Bella Roma</h2>
              <p className="text-on-surface-variant mt-4 md:mt-6 text-sm md:text-body-lg">
                Fiecare colț al localului nostru a fost gândit să vă transporte în atmosfera caldă a unei trattorii moderne, unde tradiția întâlnește designul contemporan.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex gap-4 hidden md:flex">
              <button className="w-12 h-12 md:w-14 md:h-14 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined">west</span>
              </button>
              <button className="w-12 h-12 md:w-14 md:h-14 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined">east</span>
              </button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Main Hall */}
            <motion.div variants={zoomIn} className="group relative overflow-hidden h-[300px] md:h-[500px]">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Main Hall" src="/foto/foto-interior.png"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <p className="font-label-caps text-label-caps text-primary mb-1 md:mb-2 tracking-widest">01</p>
                <h4 className="font-headline-md text-xl md:text-headline-md">Main Hall</h4>
              </div>
            </motion.div>
            
            {/* Lounge Area */}
            <motion.div variants={zoomIn} className="group relative overflow-hidden h-[300px] md:h-[500px] md:mt-12">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Lounge Area" src="/foto/foto-interior-2.png"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <p className="font-label-caps text-label-caps text-primary mb-1 md:mb-2 tracking-widest">02</p>
                <h4 className="font-headline-md text-xl md:text-headline-md">Lounge Area</h4>
              </div>
            </motion.div>
            
            {/* Artisanal Bar */}
            <motion.div variants={zoomIn} className="group relative overflow-hidden h-[300px] md:h-[500px] sm:col-span-2 md:col-span-1">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Artisanal Bar" src="/foto/foto-bar.png"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <p className="font-label-caps text-label-caps text-primary mb-1 md:mb-2 tracking-widest">03</p>
                <h4 className="font-headline-md text-xl md:text-headline-md">Artisanal Bar</h4>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 md:py-section-gap px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div 
          variants={zoomIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          className="border border-outline-variant/30 p-10 md:p-24 relative overflow-hidden text-center gold-glow"
        >
          {/* Background decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-6 md:mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-4 md:mb-6">Planifică o vizită memorabilă</h2>
            <p className="text-on-surface-variant text-sm md:text-body-lg mb-8 md:mb-12">
              Pentru grupuri mai mari de 8 persoane sau evenimente private, vă rugăm să ne contactați cu cel puțin 48 de ore înainte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0700000000" className="bg-primary text-on-primary font-label-caps text-label-caps px-8 md:px-10 py-4 md:py-5 uppercase tracking-widest hover:brightness-110 transition-all text-center">
                Sună Pentru Rezervare
              </a>
              <button className="border border-primary text-primary font-label-caps text-label-caps px-8 md:px-10 py-4 md:py-5 uppercase tracking-widest hover:bg-primary/5 transition-all text-center">
                Vezi Meniul Digital
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
