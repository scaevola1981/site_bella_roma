# Bella Roma - Artisanal Pizza

Un website de prezentare premium pentru **Bella Roma**, o pizzerie artizanală cu specific napoletan. Construit cu accent pe estetică, animații fluide și o experiență de utilizare (UX) superioară, acest site reflectă calitatea și pasiunea din spatele produselor oferite.

## 🌟 Funcționalități Cheie (Features)
- **Design Premium & Modern**: UI bazat pe paleta oficială a brandului (tonuri calde de negru, auriu și bronz) și elemente de tip *Glassmorphism*.
- **Hero Video & Scroll Parallax**: Secțiune de început imersivă, cu fundal video, urmată de o tranziție fluidă peste care glisează secțiunile de conținut.
- **Animații Custom & Micro-Interacțiuni**: 
  - Elemente animate la scroll folosind `framer-motion`.
  - Cursor interactiv și personalizat (o felie de pizza cu fir de mozzarella generat dinamic).
- **Responsive Design**: Optimizat 100% pentru ecrane de telefon, tabletă și desktop.
- **Galerie Dinamică & Efecte 3D**: Imagini de prezentare care interacționează natural (ridicare la hover și umbre dinamice).

## 🛠️ Tehnologii Folosite
- **[React 18](https://reactjs.org/)** - Framework principal pentru interfață.
- **[Vite](https://vitejs.dev/)** - Bundler rapid pentru dezvoltare.
- **[Framer Motion](https://www.framer.com/motion/)** - Pentru animații complexe și efecte de scroll.
- **[Lucide React](https://lucide.dev/)** - Pentru iconițe SVG vectoriale, minimaliste.
- **CSS3 Vanilla** - Stilizare nativă (fără framework-uri externe) pentru un control pixel-perfect și performanță maximă.

## 📂 Structura Proiectului
```
Site-Bella-Roma/
├── public/                 # Resurse statice (vor fi servite la rădăcină)
│   ├── foto/               # Logouri, imagini de galerie și svg-uri (pizza)
│   └── videos/             # Videoclipuri de prezentare (Hero și pașii de preparare)
├── src/                    
│   ├── components/         # Componente refolosibile de React
│   │   ├── Navigation.jsx  # Bara de meniu cu efect de scroll
│   │   ├── Footer.jsx      # Subsolul cu detalii de contact
│   │   └── MozzarellaCursor.jsx # Componenta pentru cursorul animat
│   ├── pages/              
│   │   └── Home.jsx        # Pagina principală (conține secțiunile majore)
│   ├── App.jsx             # Componenta rădăcină care unește paginile și meniul
│   └── index.css           # Variabilele globale de culoare (Paleta Brandului)
├── index.html              # Punctul de intrare (Entry point)
└── package.json            # Dependențe și scripturi NPM
```

## 🚀 Cum se rulează local

1. **Clonarea / Deschiderea proiectului**
   Deschide terminalul în folderul principal al proiectului (`/Site-Bella-Roma`).

2. **Instalarea dependențelor**
   Dacă nu ai făcut-o deja, rulează:
   ```bash
   npm install
   ```

3. **Pornirea serverului de dezvoltare**
   ```bash
   npm run dev
   ```
   Aplicația va porni (în general pe portul `localhost:5173`). Terminalul îți va afișa adresa exactă pe care o poți accesa în browser.

4. **Construirea pentru producție (Build)**
   Când ești gata să urci site-ul pe internet, rulează:
   ```bash
   npm run build
   ```
   Fișierele optimizate vor fi generate în folderul `dist/`.

## 🎨 Paleta de Culori
Site-ul utilizează următoarele variabile globale pentru coerență vizuală:
- **Fundal principal (`--bg`)**: `#14110f` (Negru cald)
- **Fundal secțiuni (`--bg-alt`)**: `#1f1a1a` (Culoarea logo-ului)
- **Auriu (`--gold`)**: `#c6a47c` (Highlight pentru texte & butoane)
- **Bronz (`--bronze`)**: `#6f4d34` (Borduri & Iconițe)
- **Text Principal (`--text`)**: `#e8e4de`
- **Text Secundar (`--text-muted`)**: `#9a9a9a`

## 👨‍💻 Dezvoltare
Acest proiect a fost structurat pentru a fi ușor de întreținut. Orice text sau imagine din pagina principală poate fi schimbat direct din `src/pages/Home.jsx`. CSS-ul corespunzător paginii se află în `Home.css`.
